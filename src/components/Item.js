import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart]=useState(false)

  function handleClick(){
    setInCart((inCart)=>!inCart)
  }

  const cartClassName = inCart? "in-cart":""

  return (
    <li className={cartClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className= {inCart? "remove":"add"} >{inCart? "Remove From cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
