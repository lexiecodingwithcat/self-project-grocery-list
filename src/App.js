import { useState } from "react";

const shoppingList = [
  { id: 0, quantity: 2, name: "salmon", bought: false },
  { id: 1, quantity: 1, name: "toast", bought: false },
  { id: 3, quantity: 18, name: "eggs", bought: false },
];

export default function App() {
  return (
    <div className="App">
      <GroceryList />
    </div>
  );
}

function GroceryList() {
  const [newShoppingList, setNewShoppingList] = useState(shoppingList);

  function handleNewItem(newItem) {
    setNewShoppingList((list) => [...newShoppingList, newItem]);
  }

  function handleToggleItem(id) {
    setNewShoppingList((arr) =>
      arr.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : { ...item }
      )
    );
  }

  function handleDeleteItem(id) {
    setNewShoppingList((arr) => arr.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Header />
      <FormAddItems onNewItem={handleNewItem} />
      <ItemList
        shoppingList={newShoppingList}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>😺Check your grocery list 🛒</h1>
    </header>
  );
}
function FormAddItems({ onNewItem }) {
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !quantity) return;
    const id = crypto.randomUUID();
    const newItem = { id, quantity, name, bought: false };
    onNewItem(newItem);
    setQuantity(0);
    setName("");
  }
  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <label> 🍟Item Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label> 🕹️Item Quantity</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function ItemList({ shoppingList, onToggleItem, onDeleteItem }) {
  return (
    <div className="item-list">
      <ul>
        {shoppingList.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onToggleItem(item.id)} />
      <span style={item.bought ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Footer() {
  return <footer className="footer">&copy; 2024 Lexie. All rights reserved.</footer>;
}
