import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../styles/itemPage.css";
import Review from "../components/Review";

function Itempage({ items, reviews, users, currentUser, baskets }) {
  const { itemId } = useParams();

  const foundItem = items.find((item) => item.id === parseInt(itemId));
  const filteredReviews = reviews.filter(
    (review) => review.itemId === parseInt(itemId)
  );

  if (!foundItem) {
    return <>Item not found!</>;
  }

  console.log(currentUser);

  const foundBasket = baskets.find(
    (basket) => basket.userId === currentUser.id
  );
  console.log(foundBasket);
  console.log(foundItem);

  function addToBasket() {
    fetch("http://localhost:4000/basket-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qty: 1,
        basketId: foundBasket.id,
        itemId: foundItem.id,
      }),
    });
  }

  return (
    <section className="itemPage">
      <div className="top">
        <h1 className="item-name">{foundItem.name}</h1>
      </div>
      <div className="imgContainer">
        <img className="item-img" src={foundItem.img} alt="" />
      </div>
      <span className="description-title">Description</span>
      <span>{foundItem.description}</span>
      <div className="button-container">
        <Link to="/basket" style={{ textDecoration: "none" }}>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={addToBasket}
          >
            {" "}
            Add to Basket
          </Button>
        </Link>
      </div>
      <h3 className="review-title">Customer Reviews</h3>
      {filteredReviews.map((review) => (
        <Review review={review} users={users} key={review.id} />
      ))}
    </section>
  );
}

export default Itempage;
