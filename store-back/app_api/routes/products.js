var express = require("express");
var router = express.Router();

const productsController = require("../controllers/products");

// список продуктів
router.get("/", productsController.getList);

router.get("/title/include", productsController.getListLike);

// видалення товару
router.delete("/", productsController.delete);

//додавання товару
router.post("/", productsController.add);

// оновленння інформації про товар
router.put("/", productsController.update);

router.get("/:id", productsController.getById);

module.exports = router;
