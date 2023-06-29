import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: String,
    desc: String,
    image: String,
    price: Number,
    stock: Number,
  },
  {
    versionKey: false,   
  }
);

const Products = mongoose.model("Products", productSchema);

export default Products;