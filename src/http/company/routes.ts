import { Router } from 'express';
import { authenticate } from './authenticate';

const routerCompany = Router();

routerCompany.post('/company/authenticate', (req, res) => authenticate(req, res));

export { routerCompany }