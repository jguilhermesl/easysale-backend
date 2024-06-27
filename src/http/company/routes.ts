import { Router } from 'express';
import { authenticate } from './authenticate';
import { createCompany } from './create-company';

const routerCompany = Router();

routerCompany.post('/company/authenticate', (req, res) => authenticate(req, res));
routerCompany.post('/company', (req, res) => createCompany(req, res));

export { routerCompany }