import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book, onAddedToCart }) => {
  const { name, author, price, image } = book;
  return (
    <div className="mt-4 book-list-item d-flex align-items-center">
      <div className="book-list-item-img">
        <img src={image} alt="book-img" />
      </div>
      <div className="book-details">
        <h6 className="book-name">{name}</h6>
        <h6 className="book-author">{author}</h6>
        <h6 className="book-price">${price}</h6>
        <button className="btn btn-success" onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
