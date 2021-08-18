import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function HomepageTile({ item }) {
  return (
    <div className="homepage-tile" key={item.id}>
      <img src={item.img} />
      <h1>{item.name}</h1>
      <p>£{item.price}</p>
      <Link to={`/items/${item.id}`} style={{ textDecoration: "none" }}>
        <Button type="submit" color="secondary" variant="contained">
          {" "}
          Read more
        </Button>
      </Link>
    </div>
  );
}
