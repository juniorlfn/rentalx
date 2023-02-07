import { Router, Response, Request } from "express";
import { Category } from "../models/category";

const categoriesRoutes = Router();

const categories: Array<Category> = [];

categoriesRoutes.post("/", (req: Request, res: Response) => {
  const { name, description } = req.body;

  const category: Category = new Category(name, description);

  categories.push(category);

  return res.status(201).json(category);
});

export { categoriesRoutes };
