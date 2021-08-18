import React from "react";

import "../styles/basket.css";

function Basket() {
  // {
  //     name: "ZAK Learning",
  //     img: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SWMM0451",
  //     description: "Customers can expand their knowledge about Microsoft Office 2019 with optional home and student or professional software",
  //     price: 9.95,
  //     RRP: 399,
  //     categoryId: 1
  // },
  return (
    <section className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        <li>
          <article className="basket-container__item">
            <img
              src="https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SWMM0451"
              alt=""
              width="90"
            />
            <p>AK Learning</p>
            <p>
              <div className="button-wrapper">
                <div>
                  <button className="product-button">-</button>
                </div>
                <span>1</span>
                <div>
                  <button className="product-button">+</button>
                </div>
              </div>
            </p>
            <p>Item total: £{(9.95 * 1).toFixed(2)}</p>
            <button className="delete-button">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                enable-background="new 0 0 50 50"
              >
                <path
                  fill="#231F20"
                  d="M10.289,14.211h3.102l1.444,25.439c0.029,0.529,0.468,0.943,0.998,0.943h18.933
                c0.53,0,0.969-0.415,0.998-0.944l1.421-25.438h3.104c0.553,0,1-0.448,1-1s-0.447-1-1-1h-3.741c-0.055,0-0.103,0.023-0.156,0.031
                c-0.052-0.008-0.1-0.031-0.153-0.031h-5.246V9.594c0-0.552-0.447-1-1-1h-9.409c-0.553,0-1,0.448-1,1v2.617h-5.248
                c-0.046,0-0.087,0.021-0.132,0.027c-0.046-0.007-0.087-0.027-0.135-0.027h-3.779c-0.553,0-1,0.448-1,1S9.736,14.211,10.289,14.211z
                M21.584,10.594h7.409v1.617h-7.409V10.594z M35.182,14.211L33.82,38.594H16.778l-1.384-24.383H35.182z"
                />
                <path
                  fill="#231F20"
                  d="M20.337,36.719c0.02,0,0.038,0,0.058-0.001c0.552-0.031,0.973-0.504,0.941-1.055l-1.052-18.535
                c-0.031-0.552-0.517-0.967-1.055-0.942c-0.552,0.031-0.973,0.504-0.941,1.055l1.052,18.535
                C19.37,36.308,19.811,36.719,20.337,36.719z"
                />
                <path
                  fill="#231F20"
                  d="M30.147,36.718c0.02,0.001,0.038,0.001,0.058,0.001c0.526,0,0.967-0.411,0.997-0.943l1.052-18.535
                c0.031-0.551-0.39-1.024-0.941-1.055c-0.543-0.023-1.023,0.39-1.055,0.942l-1.052,18.535C29.175,36.214,29.596,36.687,30.147,36.718
                z"
                />
                <path
                  fill="#231F20"
                  d="M25.289,36.719c0.553,0,1-0.448,1-1V17.184c0-0.552-0.447-1-1-1s-1,0.448-1,1v18.535
                C24.289,36.271,24.736,36.719,25.289,36.719z"
                />
              </svg>
            </button>
          </article>
        </li>
      </ul>
      <h3>Total: £9.95</h3>
      <div className="pay-button-container">
        <button className="pay-button">Make payment</button>
      </div>
    </section>
  );
}

export default Basket;
