const singleItem = () => {
  return (
    <div className="singleItem">
      <img src="holder" alt="holder" />
      <div>
        <h2>price</h2>
        <span> quantity </span>
        <button>X</button>
      </div>
    </div>
  );
};
const Cart = () => {
  return (
    <div
      className="cart"
      style={{
        position: "absolute",
        zIndex: 5,
        right: "50px",
        top: "100px",
        padding: "2rem",
        backgroundColor: "#888",
        borderRadius: "15px",
      }}
    >
      <h1>cart is empty</h1>
    </div>
  );
};

export default Cart;
