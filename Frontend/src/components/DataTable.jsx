import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaTrash } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Filter from "../components/Filter";

import { useSelector, useDispatch } from "react-redux";
import { addToCart as addToCartAction, removeFromCart as removeFromCartAction } from "../redux/cartSlice";

import game1 from "../assets/Gta.png";
import game2 from "../assets/pubg.jpg";
import game3 from "../assets/coc.jpg";
import game4 from "../assets/Drdriving.jpg";
import game5 from "../assets/Eacricket.png";
import game6 from "../assets/Simcity.jpg";
import game7 from "../assets/Standoff.png";
import game8 from "../assets/Assassincreed.jpg";
import game9 from "../assets/Cod.jpg";
const img = [game1, game2, game3, game4, game5, game6, game7, game8, game9]; // Mock images

function DataTable() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const category = useSelector((state) => state.filter.category);
  const price = useSelector((state) => state.filter.price);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then((res) => {
        let i = 0;
        res.data.map((product, i) => {
          product.image = img[i]                 // Setting up images in the fethched data, Images arent coming from database.....
          i++
        })

        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (category !== "None" && price !== "None") {
      setFilteredProducts(
        products.filter(
          (product) =>
            product.genre === category && product.price === parseInt(price)
        )
      )
    } else if (category !== "None") {
      setFilteredProducts(
        products.filter((product) => product.genre === category)
      )
    } else if (price !== "None") {
      setFilteredProducts(
        products.filter(
          (product) =>
            parseInt(product.price) >= parseInt(price.split("-")[0]) &&
            parseInt(product.price) <= parseInt(price.split("-")[1])
        )
      )
    } else {
      setFilteredProducts(products)
    }
  }, [category, price, products])           // Filtering logic.



  const handleAddToCart = (product) => {
    dispatch(addToCartAction(product));
  }

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCartAction(product));
  }


  const isProductInCart = (productId) => {
    return cart.some((item) => item._id === productId);
  }


  return (
    <div>
      <Navbar />
      <Filter />
      <div className="d-flex flex-wrap justify-content-evenly mx-2">
        {filteredProducts &&
          filteredProducts.map((product) => {
            const isInCart = isProductInCart(product._id);

            return (
              <div
                key={product._id}
                className="card mx-2 my-4 shadow-lg max-width-500"
                style={{ width: "30vmax" }}
              >
                <div className="card-body">
                  <div>
                    <img
                      src={product.image}
                      style={{ width: "100%", height: "35vh" }}
                      alt="Product"
                    />
                    <h4 className="card-title mt-4">{product.name}</h4>
                    <div>
                      <h6 className="d-inline mt-2">Genre :&nbsp;</h6>
                      <p className="d-inline">{product.genre}</p>
                      <br></br>
                    </div>
                    <div className="mt-2">
                      <h6 className="d-inline">Available on :&nbsp;</h6>
                      <p className="d-inline">{product.device}</p>
                      <br></br>
                    </div>
                    <div className="mt-2">
                      <h6 className="d-inline">Released in :&nbsp;</h6>
                      <p className="d-inline">{product.released}</p>
                      <br></br>
                    </div>
                    <div className="mt-2">
                      <h6 className="d-inline">Popularity :&nbsp;</h6>
                      <p className="d-inline">{product.popularity}</p>
                      <br></br>
                    </div>
                    <div className="mt-2">
                      <h6 className="d-inline">Rating :&nbsp;</h6>
                      <p className="d-inline">{product.rating}</p>
                      <br></br>
                    </div>
                    <div className="mt-2">
                      <h6 className="d-inline">Price :&nbsp;</h6>
                      <p className="d-inline">{product.price} Rs</p>
                      <br></br>
                    </div>

                    <div >
                      {isInCart ?
                      (<button
                        className="btn btn-danger mt-4"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        <FaTrash style={{ marginRight: "6px" }} />
                        Remove from Cart
                      </button>
                      ) : (
                      <button
                        className="btn btn-success mt-4"
                        onClick={() => handleAddToCart(product)}
                      >
                        <FaPlus style={{ marginRight: "6px" }} />
                        Add to Cart
                      </button>
                      )
                      }

                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default DataTable;
