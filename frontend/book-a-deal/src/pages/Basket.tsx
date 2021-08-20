import React from "react";
import BasketItem from "../components/BasketItem";

import "../styles/basket.css";

function Basket({
  basket,
  items,
  total,
  addToBasket,
  decreseQuantity,
  deleteBasketItem,
}) {
  if (!basket) {
    return <>..</>;
  }
  if (basket) {
    return (
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {basket.items.map((basketItem) => (
            <BasketItem
              item={items.find((item) => item.id === basketItem.itemId)}
              basketItem={basketItem}
              addToBasket={addToBasket}
              deleteBasketItem={deleteBasketItem}
              decreseQuantity={decreseQuantity}
              key={basketItem.id}
            />
          ))}
        </ul>
        <h3>Total: £{total.toFixed(2)}</h3>
        <div className="pay-button-container">
          <button className="pay-button">Make payment</button>
        </div>
      </section>
    );
  }
}

export default Basket;
