import React from "react";
import "./css/Form.css";

const Form = ({ title, description }) => {
  return (
    <div className="form-container">
      <h1>{title}</h1> 
      <p>{description}</p>
      <div className="start-container">
        <button className="start-btn">Start</button>
        <span className="press-enter">press Enter ⏎</span>
      </div>
    </div>
  );
};

export default Form;
