import React, { useState } from "react";

const SmallForm = () => {
  const [data, setData] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    setData({ name: e.target.name.value, email: e.target.email.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
      <p>
        {data.name} - {data.email}
      </p>
    </div>
  );
};

export default SmallForm;
