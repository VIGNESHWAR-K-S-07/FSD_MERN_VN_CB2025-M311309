import React from 'react'
import { useEffect, useState } from "react";
const CRUD = () => {
    const [user, setUser] = useState({});

  // Fetch user once when component loads
  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  // Update user with PUT
  function updateUser() {
    fetch("https://dummyjson.com/users/1", {
      method: "PUT",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      alert("User updated!");
      setUser(data);
    });
}
  return (
    <div>
      <h2>Edit User</h2>
      <input
        value={user.firstName || ""}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        placeholder="First Name"
      />
      <input
        value={user.lastName || ""}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        placeholder="Last Name"
      />
      <input
        value={user.email || ""}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={updateUser}>Save</button>
    </div>
  );
}

export default CRUD
