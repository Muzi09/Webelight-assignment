import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import Alert from "./Alert"

import { emptyCart } from "../redux/cartSlice";
import { addToPurchaseHistory } from "../redux/historySlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const [alert, setAlert] = useState(false)


  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleCounterChange = (price) => {
    setTotal((prevTotal) => prevTotal + price);
  }
  
  const handlePurchased = () => {
    const purchaseTime = new Date()

    const purchaseHistoryItem = {
      cart: cart,
      purchaseTime: purchaseTime,
    }

    dispatch(addToPurchaseHistory(purchaseHistoryItem))
    dispatch(emptyCart());

    setAlert(true)
  };

  return (
    <div>
      <Navbar />
      <button
        className="btn btn-dark m-4"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>

      {alert && <Alert message={"Your purchase was successfull"}/>}

      {cart[0] && (
        <div>
          <table
            className="table table-bordered table-striped"
            style={{ width: "90%", margin: "auto" }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Price</th>
                <th>Select Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.genre}</td>
                  <td>{item.price} Rs</td>
                  <td>
                    <Counter
                      onCounterChange={handleCounterChange}
                      price={item.price}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3">Grand Total</th>
                <th>{total} Rs</th>
              </tr>
            </tfoot>
          </table>
          <button
            className="btn btn-primary"
            onClick={handlePurchased}
            style={{ margin: "4vw" }}
          >
            Make payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
