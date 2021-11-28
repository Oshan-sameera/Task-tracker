import React from "react";

function Button({ color, text, onClick }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "steelBlue",
};

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
// };

export default Button;
