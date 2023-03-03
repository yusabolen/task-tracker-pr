import React from "react";

const Button = ({ show, setShow }) => {
  console.log(show);
  return (
    <div>
      <button
        type="submit"
        className={show ? "text-center m-auto p-1 rounded-1 d-flex border border-none text-light " : "text-center m-auto p-1 rounded-1 d-flex border border-none text-light btn-false "}
        onClick={() => setShow(!show)}
      >
        {show ? "Show and task Bar" : "Close and task Bar"}
        
      </button>
    </div>
  );
};

export default Button;