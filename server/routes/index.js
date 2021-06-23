const express = require("express");
const productRoute = require("./product.route");
const categoryRoute = require("./category.route");
const categoryUserRoute = require("./categoryUser.route");
const userRoute = require("./user.route");
const brandRoute = require("./brand.route");
const advertisementRoute = require("./advertisement.route");
const orderRoute = require("./order.route");
const orderDetailRoute = require("./orderDetail.route");
const commentRoute = require("./comment.route");
const productSessionRoute = require("./productSession.route");

const router = express.Router();

// Test routes
router.get("/api/test", (req, res) => {
  return res.send("hello world");
});

// Product Route API
router.use("/api/products/", productRoute);

// Category Route API
router.use("/api/categories/", categoryRoute);

// CategoryUser Route API
router.use("/api/categoryUsers/", categoryUserRoute);

// User Route API
router.use("/api/users/", userRoute);

// Brand Route API
router.use("/api/brands/", brandRoute);

// Advertisement Route API
router.use("/api/advertisements/", advertisementRoute);

// Advertisement Route API
router.use("/api/orders/", orderRoute);

// Advertisement Route API
router.use("/api/orderdetails/", orderDetailRoute);

// Comment Route API
router.use("/api/comments/", commentRoute);

//Product Session Route API
router.use("/api/productSessions/", productSessionRoute);

module.exports = router;
