import React from "react";

const Button = (props) => {
  // const buttonAnimation = () => {
  //   const button = document.querySelector(".btn-mui");
  //   const container = document.querySelector(".btn-mui-container");

  //   const createCircleIcon = (positionX, positionY) => {
  //     const circle = document.createElement("span");
  //     circle.classList.add(".btn-mui-circle");
  //     circle.style.left = `${positionX}px`;
  //     circle.style.top = `${positionY}px`;
  //     container.appendChild(circle);
  //   };

  //   const handleButtonClick = () => {
  //     console.log("click");
  //   };
  // };

  // buttonAnimation();
  return (
    <button
      onClick={() => console.log("click")}
      className={`${props.color} ${props.textcolor} btn-mui`}>
      <span className="btn-mui-container"></span>
      <span className="btn-mui-text ">{props.text}</span>
    </button>
  );
};

export default Button;
