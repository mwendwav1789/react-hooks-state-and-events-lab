import React from "react";

function Item({ name, category }) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
    
    function Item({ name }) {
      // State to track if the item is in the cart
      const [inCart, setInCart] = useState(false);
    
      // Event handler to toggle item in/out of cart
      const toggleCart = () => {
        setInCart(prevInCart => !prevInCart);
      };
    
      return (
        <li className={`item ${inCart ? 'in-cart' : ''}`}>
          <span>{name}</span>
          <button onClick={toggleCart}>
            {inCart ? 'Remove From Cart' : 'Add to Cart'}
          </button>
        </li>
      );
    }
    
    export default Item;
    
  );
}
