import { useState } from "react";
import "./App.css";

//Updating the screen

const MyButton = ({count, onClick}) => {
  return (
    <button onClick={onClick}>Clicked {count} times</button>
  );

};

export default function MyApp() {
  const [ count, setCount ] = useState(0);


  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

/* // Event handling 
const MyButton = () => {
  const handleClick = () => {
    alert("You clicked me")
 }

  return (
    <button onClick={handleClick}>Click</button>
  );
}

export default function MyApp() {
  
  return (
    <div>
    <MyButton />
    </div>
  );
} */

/* 
Rendering 
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div className="container">
      <ul>{listItems}</ul>
    </div>
  );
} */
