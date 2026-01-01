import React from 'react'

function Child({showAlert}) {
  return <button onClick={showAlert}>Click Me</button>;
}
function Parent() {
  function showAlert(){alert("Hello!");}
  return <Child showAlert={showAlert}/>;
}

export default Parent
