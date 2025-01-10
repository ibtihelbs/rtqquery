import axios from "axios";
import { useEffect, useState } from "react";
const Products = () => {
  const [data, setData] = useState(null);
  const getdata = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setData(res.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>products</h1>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
      >
        {data ? (
          data.products.map((v) => {
            const { title, thumbnail, price, discountPercentage, id } = v;
            return (
              <div
                key={id}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <img src={thumbnail} alt={title} />
                <h3>{title}</h3>
                <h1>{price}</h1>
                <button>cart</button>
              </div>
            );
          })
        ) : (
          <h2>loading</h2>
        )}
      </div>
    </div>
  );
};

export default Products;
