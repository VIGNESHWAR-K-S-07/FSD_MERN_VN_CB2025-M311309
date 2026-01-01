import React from "react";
import { useState } from "react";

const ToAddItem = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [newFruit, setNewFruit] = useState("");
  function addFruit(e) {
    e.preventDefault();
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  }
  return (
    <div>
      <form onSubmit={addFruit}>
        <input value={newFruit} onChange={(e) => setNewFruit(e.target.value)} />
        <button>Add</button>
      </form>
      {fruits.map((f, i) => (
        <p key={i}>{f}</p>
      ))}
    </div>
  );
};

export default ToAddItem;
