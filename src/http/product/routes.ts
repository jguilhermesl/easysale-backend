import { Router } from 'express';
import { createProduct } from './create-product';
import { fetchProducts } from './fetch-products';
import { authMiddleware } from '@/middlewares/auth-middleware';

const routerProduct = Router();

routerProduct.post('/product', authMiddleware, (req, res) => createProduct(req, res));
routerProduct.get('/products', authMiddleware, (req, res) => fetchProducts(req, res));

export { routerProduct }