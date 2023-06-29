import { productsService } from "../services/index.js";

const createProducts = async (req, res, next) => {
  try {
    const response = await productsService.createProducts(req.body);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const updateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productsService.updateProducts(req.body, id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const deleteProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productsService.deleteProducts(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findAllProducts = async (req, res, next) => {
  try {
    const response = await productsService.findAllProducts();

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productsService.findProductsById(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

export const productsController = {
  createProducts,
  updateProducts,
  deleteProducts,
  findAllProducts,
  findProductsById,
};
