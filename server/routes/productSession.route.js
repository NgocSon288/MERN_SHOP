const express = require("express");
const productSessionService = require("./../services/productSession.service");
const verifyToken = require("./../middleware/auth");

const route = express.Router();

// @route GET /api/products
// @desc Get all products
// @access Public
route.get("/", productSessionService.getAll);

// @route GET /api/products/:id
// @desc Get product by id
// @access Public
route.get("/:id", productSessionService.add);

// @route DELETE /api/products/:id
// @desc Delete product by id
// @access Private
route.delete("/:id", verifyToken, productSessionService.delete);

// @route PUT /api/products/:id
// @desc Update product by id
// @access Private
//route.put('/:id', verifyToken, productSessionService.update)

module.exports = route;
