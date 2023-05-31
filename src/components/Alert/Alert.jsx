import React from "react";
import "./Alert.css";

function Alert({ text, variant }) {
  return <div className={variant}>{text}</div>;
}

export default Alert;
