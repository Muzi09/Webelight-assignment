const express = require("express");
const productsRoute = express.Router();
const product = require("../models/products");




// Route to post products details


productsRoute.post("/", async (req, res) => {
  try {
    const { name, device, genre, released, popularity, rating, price } = req.body;
    const newProduct = await product.create({
      name,
      device,
      genre,
      released,
      popularity,
      rating,
      price,
    });

    res.status(201).json(newProduct);
  }

  catch (error) {
    res.status(500).json({ message: "Error creating product" })
  }
})




// Route to get products
productsRoute.get("/", async (req, res) => {
  try {
    const products = await product.find()
    res.status(200).json(products)
  }

  catch (error) {
    res.status(500).json({ message: "Error fetching products" })
  }
})

module.exports = productsRoute
