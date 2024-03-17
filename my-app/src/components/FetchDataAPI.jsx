import { useState, useEffect } from "react";

const FetchDataAPI = () => {
  const [productId, setProductId] = useState(1); // Estado para almacenar el ID del producto
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]); // Se ejecuta cada vez que cambia el productId

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="productId">Product ID:</label>
        <input
          type="number"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="ml-2 border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="p-4 bg-gray-200 rounded-lg">
          {product ? (
            <>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="my-2">{product.description}</p>
              <p className="my-2">Price: {product.price}</p>
              <p className="my-2">Rating: {product.rating}</p>
            </>
          ) : (
            <p>No product found with ID: {productId}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FetchDataAPI;
