import { create } from './create';
import { findFirst } from './find-first';
import { updateOne } from './update-one';
import { findById } from "./find-by-id";
import { findMany } from './find-many';

export const categoryDAO = {
  findById: findById,
  updateOne,
  findFirst,
  create,
  findMany
}