import express from "express";
import cors from "cors";
import "dotenv/config";

import { corsMiddleware } from "@/middlewares/cors-middleware";
import { routerCompany } from "./http/company/routes";
import { routerCategory } from "./http/category/routes";
import { routerProduct } from "./http/product/routes";

const port = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(corsMiddleware);
app.use(express.json());

app.use(routerCompany);
app.use(routerCategory);
app.use(routerProduct);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!!!`));
