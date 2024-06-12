export default function App() {
  return (
    <div className="App">
      <GroceryList />
    </div>
  );
}

function GroceryList() {
  return (
    <div>
      <Header />
      <FormAddItems />
      <ItemList />
      <Footer/>
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
function FormAddItems() {
  return (
    <form className="add-item">
      <label> 🍟Item Name </label>
      <input type="text" />
      <label> 🕹️Item Quantity</label>
      <input type="number" />
      <button>Add</button>
    </form>
  );
}

function ItemList() {
  return (
    <div className="item-list">
      <ul >
        <Item />
      </ul>
    </div>
  );
}

function Item() {
  return (
    <li>
      <input type="checkbox" />
      Salmon
      <span>❌</span>
    </li>
  );
}

function Footer(){
  return <footer className="footer">
    Copy right reserved for Lexie 2024
  </footer>
}