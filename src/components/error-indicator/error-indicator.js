import React from "react";
import "./error-indicator.css";
import errorIcon from "./error-icon.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={errorIcon} alt="error-img" />
      <h2>Oops...</h2>
      <h4>Something went wrong!</h4>
    </div>
  );
};

export default ErrorIndicator;
