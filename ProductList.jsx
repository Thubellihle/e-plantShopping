import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Fern", price: 12, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Cactus", price: 8, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Orchid", price: 25, category: "Flowering", image: "https://via.placeholder.com/100" }
];

function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  return (
    <div>
      <h2>Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>

          <button
            onClick={() => {
              dispatch(addToCart(plant));
              setAdded([...added, plant.id]);
            }}
            disabled={added.includes(plant.id)}
          >
            {added.includes(plant.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
