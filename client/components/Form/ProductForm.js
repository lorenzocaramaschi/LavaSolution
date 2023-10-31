import React, { useState } from "react";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name: productName,
      description,
      image: imageURL,
      price,
      stock,
    };

    // Send productData to the server (explained later)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="url"
        placeholder="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(parseInt(e.target.value))}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
