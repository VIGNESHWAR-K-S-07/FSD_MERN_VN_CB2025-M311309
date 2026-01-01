import React from "react";
import { useState } from "react";
const ToDeleteItem = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana","Orange","Strawberry"]);
  function removeFruit(index) {
    setFruits(fruits.filter((_, i) => i !== index));
  }
  return (
    <div>
      {fruits.map((f, i) => (
        <p key={i}>
          {f} <button onClick={() => removeFruit(i)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default ToDeleteItem;
