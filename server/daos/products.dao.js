import Products from "../models/Product.js";

const createProducts = async (createProductsRequest) => {
    try {
      const createdProducts = await Products.create(createProductsRequest);
  
      return createdProducts;
    } catch (err) {
      console.log(err);
    }
  };
  
  const updateProducts = async (id, updateProductsRequest) => {
    try {
      const updatedProducts = await Products.updateOne({ _id: id }, updateProductsRequest);
  
      return updatedProducts;
    } catch (err) {
      console.log(err);
    }
  };
  
  const deleteProducts = async (id) => {
    try {
      const deletedProducts = await Products.deleteOne({ _id: id });
  
      return deletedProducts;
    } catch (err) {
      console.log(err);
    }
  };
  
  const findAllProducts = async () => {
    try {
      const products = await Products.find();
  
      return products;
    } catch (err) {
      console.log(err);
    }
  };
  
  const findProductsById = async (id) => {
    try {
      const products = await Products.findById(id);
  
      return products;
    } catch (err) {
      console.log(err);
    }
  };
  
  const findProductsByFilter = async (filters) => {
    try {
      const products = await Products.findOne(filters);
  
      return products;
    } catch (err) {
      console.log(err);
    }
  };
  
  export const productsDao = {
    createProducts,
    updateProducts,
    deleteProducts,
    findAllProducts,
    findProductsById,
    findProductsByFilter,
  };