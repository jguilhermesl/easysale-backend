import { Router } from 'express';
import { createProduct } from './create-product';

const routerProduct = Router();

routerProduct.post('/product', (req, res) => createProduct(req, res));

export { routerProduct }