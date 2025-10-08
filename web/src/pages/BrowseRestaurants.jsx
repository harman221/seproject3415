import React from "react";
import "../BrowseRestaurants.css";
import { useNavigate } from "react-router-dom";

export default function BrowseRestaurants() {
  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: "Spice Villa",
      cuisine: "Indian",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "La Pasta",
      cuisine: "Italian",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1601924571738-6fbb7cbb49f6?auto=format&fit=crop&w=800&q=60", // ✅ updated working image
    },
    {
      id: 3,
      name: "Sushi World",
      cuisine: "Japanese",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Burger House",
      cuisine: "American",
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60",
    },
  ];

  // 🧭 Instead of alert, navigate to the restaurant’s menu page
  const handleCheckMenu = (id) => {
    navigate(`/restaurants/${id}/menu`);
  };

  return (
    <div className="restaurants-page">
      <h2 className="restaurants-title">🍴 Browse Restaurants 🍴</h2>
      <div className="restaurant-list">
        {restaurants.map((r) => (
          <div key={r.id} className="restaurant-card">
            <img src={r.image} alt={r.name} className="restaurant-image" />
            <div className="restaurant-info">
              <h3>{r.name}</h3>
              <p>{r.cuisine}</p>
              <p className="rating">⭐ {r.rating} / 5</p>
              <button
                className="order-btn"
                onClick={() => handleCheckMenu(r.id)}
              >
                Check Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
