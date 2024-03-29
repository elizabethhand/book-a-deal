import React from "react";

export default function Review({ review, users }) {
  const user = users.find((user) => user.id === review.userId);
  return (
    <div className="review-container" key={review.id}>
      <span className="first-last-name">{user.userName}</span>
      <div className="review">
        <div className="rating-date">
          <span>Rating {review.rating}</span>
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
          <span>Date {review.date}</span>
        </div>
        <span>{review.description}</span>
      </div>
    </div>
  );
}
