import {
  useGetProductsQuery,
  useDeleteItemMutation,
  useUpdateCartMutation,
} from "../store/api";

const SingleItem = ({ v }) => {
  const [deleteItem, { isError, isLoading, error }] = useDeleteItemMutation();
  const [updateCart] = useUpdateCartMutation();
  const handleDelete = async () => {
    try {
      await deleteItem(v.id).unwrap();
      console.log("Item deleted:", v.id);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="singleItem">
      <img src={v.thumbnail} alt={`${v.name} thumbnail`} />
      <div>
        <h2>{v.price}</h2>
        <span> {v.quantiy || 1} </span>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          aria-label={`Remove ${v.name} from cart`}
        >
          {isLoading ? "Removing..." : "X"}
        </button>
        <button
          onClick={() => {
            updateCart({ ...v, quantiy: 2 });
            console.log({ ...v, quantiy: 2 });
          }}
        >
          edit
        </button>
        {isError && (
          <p>Error: {error?.data?.message || "Something went wrong"}</p>
        )}
      </div>
    </div>
  );
};

const Cart = () => {
  const { data, error, isError, isLoading } = useGetProductsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError)
    return <h1>Error: {error?.data?.message || "Failed to load cart"}</h1>;

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
      {data && data.length > 0 ? (
        data.map((v) => <SingleItem key={v.id} v={v} />)
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
