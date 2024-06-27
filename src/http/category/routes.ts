import { Router } from 'express';
import { createCategory } from './create-category';
import { authMiddleware } from '@/middlewares/auth-middleware';

const routerCategory = Router();

routerCategory.post('/category', authMiddleware, (req, res) => createCategory(req, res));

export { routerCategory }