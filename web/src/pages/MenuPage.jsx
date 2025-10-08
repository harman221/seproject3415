import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MenuItemCard from "../components/MenuItemCard"; // ✅ new import
import "../MenuPage.css";

export default function MenuPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example menu data with images added
  const allMenus = {
    1: [
      {
        id: 101,
        name: "Butter Chicken",
        price: 12.99,
        popular: true,
        image:
          "https://images.unsplash.com/photo-1632179248593-8e446c3dbfc7?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 102,
        name: "Paneer Tikka",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1623063835251-6f13f4a3f3ed?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 103,
        name: "Naan Basket",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1604917877939-1f0e3a93a2f8?auto=format&fit=crop&w=800&q=60",
      },
    ],
    2: [
      {
        id: 201,
        name: "Spaghetti Carbonara",
        price: 13.49,
        popular: true,
        image:
          "https://images.unsplash.com/photo-1603133872878-684f58f5b6c5?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 202,
        name: "Margherita Pizza",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1601924582971-d3cf5e8f0b8d?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 203,
        name: "Lasagna",
        price: 12.5,
        image:
          "https://images.unsplash.com/photo-1612874742228-5b8c31b2d62c?auto=format&fit=crop&w=800&q=60",
      },
    ],
    // Add more restaurant menus here if needed
  };

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const menuItems = allMenus[id] || [];

  return (
    <div className="menu-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>🍽️ Menu</h2>

      <div className="menu-list">
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onAddToCart={addToCart} // ✅ passes handler to child
            />
          ))
        ) : (
          <p>No menu available for this restaurant.</p>
        )}
      </div>

      <div className="cart-section">
        <h3>🛒 Cart ({cart.length})</h3>
        {cart.length > 0 ? (
          cart.map((item, i) => (
            <p key={i}>
              {item.name} — ${item.price.toFixed(2)}
            </p>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
