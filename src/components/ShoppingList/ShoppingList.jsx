import { useState } from "react";
import "./ShoppingList.css";

export default function ShoppingList() {
  const [itemList, setItemList] = useState([]);

  function addItem(event) {
    event.preventDefault();
    const form = event.target;
    const itemName = form.item.value;
    const itemAmount = form.amount.value;
    const newItemList = [...itemList, {name: itemName, amount: itemAmount}];
    setItemList(newItemList);
  }

  function removeItem(itemToRemove) {
    const newItemList = itemList.filter((item) => item !== itemToRemove);
    setItemList(newItemList);
  }


  return (
    <>
      <h2>Mini Project 4: Shopping List</h2>
      <div className="shopping-list">
        <h3>Things to buy</h3>
        <form onSubmit={addItem}>
          <input type="text" name="item" placeholder="Add new item" required />
          <input type="number" name="amount" min="1" defaultValue="1" />
          <button>Add</button>
        </form>
        <ul>
          {itemList.map((item, index) => {
            return <Item item={item} key={item.name + index} onDelete={removeItem} />
          })}
        </ul>
      </div>
    </>
    )
}

function Item({item, onDelete}) {
  return (
    <li>{item.name} - {item.amount} <button onClick={() => onDelete(item)}>x</button></li>
  )
}