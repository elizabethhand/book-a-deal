import React from "react";
import { useEffect, useState } from "react";
import HomepageTile from "../components/homepageTile";

function Homepage() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((resp) => resp.json())
      .then(setItems);
  }, []);

  let retail;
  let fooddrink;
  let healthfitness;
  let entertainment;

  if (items) {
    retail = items.result.filter((item) => item.categoryId === 1);
    fooddrink = items.result.filter((item) => item.categoryId === 2);
    healthfitness = items.result.filter((item) => item.categoryId === 3);
    entertainment = items.result.filter((item) => item.categoryId === 4);
  }

  if (items) {
    return (
      <div className="item-categories">
        <h1 className="category-title"> Retail</h1>
        <div className="container">
          {retail.map((item) => (
            <HomepageTile item={item} />
          ))}
        </div>
        <h1 className="category-title"> Food & Drink</h1>
        <div className="container">
          {fooddrink.map((item) => (
            <HomepageTile item={item} />
          ))}
        </div>
        <h1 className="category-title"> Health & Fitness</h1>
        <div className="container">
          {healthfitness.map((item) => (
            <HomepageTile item={item} />
          ))}
        </div>
        <h1 className="category-title"> Entertainment</h1>
        <div className="container">
          {entertainment.map((item) => (
            <HomepageTile item={item} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}

export default Homepage;
