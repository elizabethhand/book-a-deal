import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../styles/itemPage.css";

function Itempage() {
  // {
  //     name: "ZAK Learning",
  //     img: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SWMM0451",
  //     description: "Customers can expand their knowledge about Microsoft Office 2019 with optional home and student or professional software",
  //     price: 9.95,
  //     RRP: 399,
  //     categoryId: 1
  // },

  //    {
  //         description: "Great stuff, amazing price. I can't beleve it cost soo little!",
  //         date: "10/08/2021",
  //         rating: 5,
  //         itemId: 1,
  //         userId: 1
  //     },

  return (
    <section className="itemPage">
      <div className="top">
        <h1 className="item-name">ZAK Learning</h1>
        <h2 className="raiting">Rating 4.5</h2>
        <span className="star-svg">
          <svg
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            version="1.1"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
          >
            <g transform="translate(0 -1028.4)">
              <path
                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                fill="#f39c12"
              />
              <path
                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                fill="#f1c40f"
              />
            </g>
          </svg>
        </span>
      </div>
      <div className="imgContainer">
        <img
          className="item-img"
          src="https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SWMM0451"
          alt=""
        />
      </div>
      <span className="description-title">Description</span>
      <span>
        Customers can expand their knowledge about Microsoft Office 2019 with
        optional home and student or professional software.
      </span>
      <div className="button-container">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button type="submit" color="secondary" variant="contained">
            {" "}
            Add to Basket
          </Button>
        </Link>
      </div>
      <h3 className="review-title">Customer Reviews</h3>
      <div className="review-container">
        <span className="first-last-name">Username</span>
        <div className="review">
          <div className="rating-date">
            <span>Rating</span>
            <span>Date 12/05/21</span>
            <span>
              <svg
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                version="1.1"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
              >
                <g transform="translate(0 -1028.4)">
                  <path
                    d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                    fill="#f39c12"
                  />
                  <path
                    d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                    fill="#f1c40f"
                  />
                </g>
              </svg>
            </span>
          </div>
          <span>
            Great stuff, amazing price. I can't beleve it cost soo little!
          </span>
        </div>
      </div>
    </section>
  );
}

export default Itempage;
