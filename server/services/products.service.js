import { productsDao } from "../daos/products.dao.js";

const createProducts = async (createProductsRequest) => {
  try {
    const { name } = createProductsRequest;
    const existingProducts = await productsDao.findProductsByFilter({ name });

    if (existingProducts) {
      throw {
        message: "The products you want to create already exists",
        status: 400,
      };
    }

    const createdProducts = await productsDao.createProducts(createProductsRequest);

    return createdProducts;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateProducts = async (updateProductsRequest, id) => {
  try {
    const existingProducts = await productsDao.findProductsById(id);

    if (!existingProducts) {
      throw {
        message: "The products you want to update does not exist",
        status: 400,
      };
    }

    const updatedProducts = await productsDao.updateProducts(id, updateProductsRequest);

    return updatedProducts;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteProducts = async (id) => {
  try {
    const existingProducts = productsDao.findProductsById(id);

    if (!existingProducts) {
      throw {
        message: "The products you want to delete does not exist",
        status: 400,
      };
    }

    const deletedProducts = await productsDao.deleteProducts(id);

    return deletedProducts;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllProducts = async () => {
  try {
    const teams = await productsDao.findAllProducts();

    return teams;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findProductsById = async (id) => {
  try {
    const products = await productsDao.findProductsById(id);

    if (!products) {
      throw {
        message: "The products you want to look for does not exists",
        status: 404,
      };
    }

    return products;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const productsService = {
  createProducts,
  updateProducts,
  deleteProducts,
  findAllProducts,
  findProductsById,  
};