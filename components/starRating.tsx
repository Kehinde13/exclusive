import React, { useState } from "react";

type rating = {
  rating: number;
};

function StarRating({ rating }: rating) {
  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        rating--
        return (
          <span
            key={starNumber}
            style={{ fontSize: "2rem", color: "gold"  }}
          >
            {rating < 0 ? "☆" : "★"}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
