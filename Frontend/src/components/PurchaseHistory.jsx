import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PurchaseHistory() {
  const navigate = useNavigate();
  const purchaseHistory = useSelector((state) => state.history);

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

      {purchaseHistory && purchaseHistory.length > 0 && (
        <div>
          <table className="table table-bordered table-striped" style={{ width: "90%", margin: "auto" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Price</th>
                <th>Purchase Time</th>
              </tr>
            </thead>
            <tbody>
            {purchaseHistory.map((purchaseItem, index) => (
                purchaseItem.cart.map((item, itemIndex) => (
                  <tr key={`${index}-${itemIndex}`}>
                    <td>{item.name}</td>
                    <td>{item.genre}</td>
                    <td>{item.price} Rs</td>
                    {itemIndex === 0 ? (
                      <td rowSpan={purchaseItem.cart.length}>
                        {purchaseItem.purchaseTime.toLocaleString()}
                      </td>
                    ) : null}
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PurchaseHistory;
