import React from "react";
import { connect } from "react-redux";
import "./header.css";

function Header({ logo, inStock }) {
  return (
    <header id="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">{logo}</div>
          <div className="details d-flex">
            <div className="items">In stock: {inStock} books</div>
          </div>
        </div>
        <hr />
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    inStock: state.inStock,
  };
};
export default connect(mapStateToProps)(Header);
