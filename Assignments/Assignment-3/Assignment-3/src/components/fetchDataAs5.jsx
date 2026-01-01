import React from 'react'
import { useEffect, useState } from "react";
const FetchDataAs5 = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
      fetch("https://dummyjson.com/users?limit=20")
        .then((res) => res.json())
        .then((data) => setUsers(data.users));
    }, []);
    const start = page * 5;
    const shown = users.slice(start, start + 5);
  return (
    <div>
      {shown.map((u) => (
        <p key={u.id}>
          {u.firstName} {u.lastName}
        </p>
      ))}
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button
        disabled={start + 5 >= users.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default FetchDataAs5
