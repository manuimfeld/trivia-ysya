import React from "react";
import { useEffect } from "react";

const Counter = ({ counter, setCounter, areDisabled }) => {
  useEffect(() => {
    if (counter > 0 && areDisabled === false) {
      setTimeout(() => {
        let actualCount = counter;
        setCounter((actualCount -= 1));
      }, 1000);
    } else {
      setCounter(0);
    }
  }, [counter, setCounter, areDisabled]);

  return (
    <>
      {counter > 0 ? (
        <p className="counter">{counter}</p>
      ) : (
        <p className="button-continue">Siguiente intento...</p>
      )}{" "}
    </>
  );
};

export default Counter;
