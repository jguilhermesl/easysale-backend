
import { create } from './create';
import { findFirst } from './find-first';
import { updateOne } from './update-one';
import { findById } from "./find-by-id";
import { deleteOne } from "./delete-one";
import { findMany } from "./find-many";

export const productDAO = {
  findById,
  updateOne,
  findFirst,
  create,
  findMany,
  deleteOne
};
