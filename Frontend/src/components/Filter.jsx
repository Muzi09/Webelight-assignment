import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setPrice } from '../redux/filterSlice';

const Catagories = [
  "None",
  "Action",
  "Adventure",
  "Shooting",
  "Racing",
  "Simulation",
  "Sports",
  "RPG",
  "Online Multiplayer"
]

const Prices = [
  "None",
  "1000 - 5000",
  "5000 - 10000",
  "10000 - 30000",
  "30000 - 50000",
  "50000 - 100000",
]


function Home() {
  const category = useSelector((state) => state.filter.category);
  const price = useSelector((state) => state.filter.price);
  const dispatch = useDispatch();

  return (
    <div className="d-flex m-4 align-items-center">
      <h5 className="mr-4 text-sm" style={{ marginRight: "10px" }}>Filter by</h5>
      <div className="dropdown" style={{ marginRight: "10px" }}>
        <button
          className="btn btn-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {category === "None" ? "Category" : category}
        </button>
        <ul className="dropdown-menu">
          {Catagories.map((category) => {
            return <li
              key={category}
              onClick={() => { dispatch(setCategory(category)) }}
              className="dropdown-item cursor-pointer">{category}</li>
          })}
        </ul>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {price === "None" ? "Price" : price}
        </button>
        <ul className="dropdown-menu">
          {Prices.map((price) => {
            return <li
              key={price}
              onClick={() => { dispatch(setPrice(price)) }}
              className="dropdown-item cursor-pointer">{price} {price == "None" ? "" : "Rs"}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
