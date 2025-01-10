import "./App.css";
import { useState } from "react";
import Products from "./componants/Products";
import Cart from "./componants/Cart";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        style={{
          backgroundColor: "red",
          float: "right",
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {" "}
        cart{" "}
      </button>
      {open && <Cart />}
      <Products />
    </>
  );
}

export default App;
