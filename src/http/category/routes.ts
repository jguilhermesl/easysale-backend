import { Router } from 'express';
import { createCategory } from './create-category';

const routerCategory = Router();

routerCategory.post('/category', (req, res) => createCategory(req, res));

export { routerCategory }