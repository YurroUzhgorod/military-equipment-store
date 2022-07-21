const ProductModel = require("../models/product");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  let searchObj = req.query || {};

  if (searchObj.minPrice || searchObj.maxPrice) {
    searchObj.price = {
      $gte: searchObj.minPrice || 0,
      $lte: searchObj.maxPrice || Infinity,
    };
  }

  let page = searchObj.pageNumber;
  let skip = page * 4;
  let filteredProductCount;

  ProductModel.count(searchObj, function (err, count) {
    console.log("Number of products:", count);
    filteredProductCount = count;
    console.log("filteredProductCount");
    console.log(filteredProductCount);
  });

  let sortRule;
  if (searchObj.sortRule === "priseIncrease") sortRule = { price: 1 };
  if (searchObj.sortRule === "priseDecrease") sortRule = { price: -1 };
  if (searchObj.sortRule === "dateNew") sortRule = { created: 1 };
  if (searchObj.sortRule === "dateLast") sortRule = { created: -1 };
  if (searchObj.sortRule === "nameA") sortRule = { title: 1 };
  if (searchObj.sortRule === "nameZ") sortRule = { title: -1 };

  ProductModel.find(searchObj)
    .sort(sortRule)
    .skip(skip)
    .limit(4)
    .exec(function (err, products) {
      if (err)
        return sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Fetch faild!" },
        });
      sendJSONResponse(res, 200, {
        success: true,
        data: products,
        filteredProductCount,
      });
    });
};

//-------------------------------------------------------------------------------------------------
module.exports.getListLike = function (req, res) {
  ProductModel.find({
    title: { $regex: req.query.title, $options: "$i" },
  }).exec(function (err, products) {
    if (err)
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });
    sendJSONResponse(res, 200, { success: true, data: products });
  });
};
//-------------------------------------------------------------------------------------------------

module.exports.add = function (req, res) {
  let product = new ProductModel({
    code: req.body.code,
    title: req.body.title,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    category: req.body.category,
    sub_category: req.body.sub_category,
    price: parseFloat(req.body.price),
    photo: req.body.photo,
    is_available: req.body.is_available,
  });

  product.save(function (err, savedProduct) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Saving faild!" },
      });
      return;
    }
    sendJSONResponse(res, 201, { success: true, data: savedProduct });
  });
};
//-------------------------------------------------------------------------------------------------

module.exports.delete = function (req, res) {
  ProductModel.findByIdAndDelete(req.body.id, function (err) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Delete faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true });
  });
};
//-------------------------------------------------------------------------------------------------

module.exports.update = function (req, res, next) {
  let product = {
    code: req.body.code,
    title: req.body.title,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    category: req.body.category,
    sub_category: req.body.sub_category,
    price: parseFloat(req.body.price),
    is_available: req.body.is_available,
    updated: Date.now(),
  };
  if (req.body.photo) {
    product.photo = req.body.photo;
  }
  ProductModel.findByIdAndUpdate(
    req.body._id,
    product,
    { new: true },
    function (err) {
      // mongoose.disconnect()
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Update faild!" },
        });
        return;
      }

      sendJSONResponse(res, 200, { success: true });
    }
  );
};
//-------------------------------------------------------------------------------------------------

module.exports.getById = function (req, res) {
  ProductModel.findById(req.params.id, function (err, searchProduct) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Find product faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true, data: searchProduct });
  });
};
