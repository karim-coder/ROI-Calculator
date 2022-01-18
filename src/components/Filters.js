import React from "react";

export const Button = (props) => {
  return (
    <div
      style={{
        padding: 15,
        backgroundColor: props.enable ? "#ffc40c" : "#F8F8F6",
        borderRadius: 10,
        width: 80,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        margin: "auto",
        marginRight: 15,
        cursor: "pointer",
      }}
    >
      {props.text}
    </div>
  );
};

export const Filter = (props) => {
  return (
    <div
      style={{
        padding: 15,
        backgroundColor: props.enable ? "#ffc40c" : "#F8F8F6",
        color: props.enable ? "black" : "#888",
        borderRadius: 25,
        width: 100,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        margin: "auto",
        marginRight: 15,
        cursor: "pointer",
      }}
    >
      {props.text}
    </div>
  );
};
