import React from 'react'
import axios from "axios";
const PostMethod = () => {
    async function handleSubmit(e){
    e.preventDefault();
    await axios.post("https://dummyjson.com/posts/add",{title:"Test",body:"Hello"});
    alert("Post Added!");}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" />
        <textarea name="body" placeholder="Body" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostMethod
