import React from "react";

const Button = ({ name, bgColor, textColor, mgTop }) => {
  const buttonClasses = `bg-${bgColor} text-${textColor} px-6 py-2 rounded-[30px] mt-${mgTop}`;

  const buttonStyles = {
    backgroundColor: bgColor,
    color: textColor,
    marginTop: mgTop,
  };

  return (
    <button className={buttonClasses} style={buttonStyles}>
      {name}
    </button>
  );
};

export default Button;
