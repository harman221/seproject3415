import React from "react";
import "./MenuItemCard.css";

export default function MenuItemCard({ item, onAddToCart }) {
  return (
    <div className={`menu-item-card ${item.popular ? "popular" : ""}`}>
      <img
        src={item.image}
        alt={item.name}
        className="menu-item-image"
        onError={(e) =>
          (e.target.src =
            "https://via.placeholder.com/120x100.png?text=No+Image")
        }
      />

      <div className="menu-item-details">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        {item.popular && <span className="badge">⭐ Most Selling</span>}
      </div>

      <button
        className="add-btn"
        onClick={() => onAddToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
}
