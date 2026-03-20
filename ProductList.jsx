import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

// Navbar component
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> | <Link to="/cart">Cart</Link>
    </nav>
  );
}

// Plant data grouped by category
const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Cactus", price: 8, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Echeveria", price: 12, category: "Succulents", image: "https://via.placeholder.com/100" },

  { id: 4, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Fern", price: 12, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 6, name: "ZZ Plant", price: 18, category: "Indoor", image: "https://via.placeholder.com/100" },

  { id: 7, name: "Peace Lily", price: 20, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 8, name: "Orchid", price: 25, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 9, name: "Kalanchoe", price: 15, category: "Flowering", image: "https://via.placeholder.com/100" }
];

function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  // Group plants by category
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div>
      <Navbar />
      <h2>Plant Catalog</h2>

      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: "flex", gap: "20px" }}>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => {
                      dispatch(addItem(plant));
                      setAdded([...added, plant.id]);
                    }}
                    disabled={added.includes(plant.id)}
                  >
                    {added.includes(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
