import React from 'react'

const IsLoggedIn = () => {
    const isLoggedIn = true;
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>;
    </div>
  );
}

export default IsLoggedIn
