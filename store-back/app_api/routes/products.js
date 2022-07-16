var express = require("express");
var router = express.Router();

const productsController = require("../controllers/products");

router.get("/", productsController.getList);

router.get("/title/include", productsController.getListLike);

router.delete("/", productsController.delete);

router.post("/", productsController.add);

router.put("/", productsController.update);

router.get("/:id", productsController.getById);

module.exports = router;
