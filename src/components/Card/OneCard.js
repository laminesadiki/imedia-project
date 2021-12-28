import React from "react";
import "./Card.css";

function OneCard({el}) {
  return (
    <div className="card" style={{ background: "white" }}>
      <div className="card__leftSide">
        <img
          className="img__card"
          src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
          alt="Avatar"
        />
      </div>
      <div className="card__rightside">
        <h3>
          {el["name"]}
        </h3>
        <p>{el["Address"]}</p>
        <div className="card__buttons">
          <button style={{ color: "#FFFFFF", background: "#49B9DC" }}>
            Edit
          </button>
          <button style={{ color: "#FFFFFF", background: "#DC497E" }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneCard;
