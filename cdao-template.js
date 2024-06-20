const fs = require('fs');
const path = require('path');

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function generateCreateFile(daoName) {
  const fileName = "create"
  const content = `
import prismaClient from "@/services/prisma";
import { Prisma } from "@prisma/client";

export const create = async (data: Prisma.${daoName.charAt(0).toUpperCase() + daoName.slice(1)}CreateInput) => {
  return await prismaClient.${daoName}.create({
    data
  });
};
  `

  const filePath = path.join(`./src/DAO/${daoName}/${fileName}.ts`);
  ensureDirectoryExistence(filePath);
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
    }
  });
}

function generateFindFirstFile(daoName) {
  const fileName = "find-first"
  const daoNameWithFirstLetterUppercase = daoName.charAt(0).toUpperCase() + daoName.slice(1)
  const content = `
import { Prisma } from '@prisma/client';
import prismaClient from "@/services/prisma";

export const findFirst = async (where: Prisma.${daoNameWithFirstLetterUppercase}WhereInput, include?: Prisma.${daoNameWithFirstLetterUppercase}Include) => {
  return await prismaClient.${daoName}.findFirst({
    where,
    include
  });
};
  `

  const filePath = path.join(`./src/DAO/${daoName}/${fileName}.ts`);
  ensureDirectoryExistence(filePath);
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
    }
  });
}

function generateUpdateOneFile(daoName) {
  const fileName = "update-one"
  const daoNameWithFirstLetterUppercase = daoName.charAt(0).toUpperCase() + daoName.slice(1)
  const content = `
import prismaClient from "@/services/prisma";
import { Prisma } from "@prisma/client";

export const updateOne = async (id: string, data: Prisma.${daoNameWithFirstLetterUppercase}UpdateInput) => {
  return await prismaClient.${daoName}.update({
    where: {
      id
    },
    data
  });
};
  `

  const filePath = path.join(`./src/DAO/${daoName}/${fileName}.ts`);
  ensureDirectoryExistence(filePath);
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
    }
  });
}

function generateFindManyFile(daoName) {
  const fileName = "find-many"
  const daoNameWithFirstLetterUppercase = daoName.charAt(0).toUpperCase() + daoName.slice(1)
  const content = `
import { Prisma } from '@prisma/client';
import prismaClient from "@/services/prisma";

export const findMany = async (where: Prisma.${daoNameWithFirstLetterUppercase}WhereInput, include?: Prisma.${daoNameWithFirstLetterUppercase}Include) => {
  return await prismaClient.${daoName}.findMany({
    where,
    include,
    orderBy: {
      createdAt: "desc"
    }
  });
};
  `

  const filePath = path.join(`./src/DAO/${daoName}/${fileName}.ts`);
  ensureDirectoryExistence(filePath);
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
    }
  });
}

function generateDeleteOneFile(daoName) {
  const fileName = "delete-one"
  const daoNameWithFirstLetterUppercase = daoName.charAt(0).toUpperCase() + daoName.slice(1)
  const content = `
import prismaClient from "@/services/prisma";

export const deleteOne = async (id: string) => {
  return await prismaClient.${daoName}.delete({
    where: {
      id
    },
  });
};
  `

  const filePath = path.join(`./src/DAO/${daoName}/${fileName}.ts`);
  ensureDirectoryExistence(filePath);
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
    }
  });
}

function generateFindByIdFile(daoName) {
  const fileName = "find-by-id"
  const daoNameWithFirstLetterUppercase = daoName.charAt(0).toUpperCase() + daoName.slice(1)
  const content = `
import prismaClient from "@/services/prisma";

export const findById = async (id: string) => {
  return await prismaClient.${daoName}.findUnique({
    where: {
      id: id
    }
  });
};
  `

  const filePath = path.join(`./src/DAO/${daoName}/${fileName}.ts`);
  ensureDirectoryExistence(filePath);
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
    }
  });
}

function generateDAO(daoName) {
  const content = `
import { create } from './create';
import { findFirst } from './find-first';
import { updateOne } from './update-one';
import { findById } from "./find-by-id";
import { deleteOne } from "./delete-one";
import { findMany } from "./find-many";

export const ${daoName}DAO = {
  findById,
  updateOne,
  findFirst,
  create,
  findMany,
  deleteOne
};
`

  const filePath = path.join(`./src/DAO/${daoName}/index.ts`);
  ensureDirectoryExistence(filePath);
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
    }
  });
}

function generateFiles(daoName) {
  generateDAO(daoName);
  generateCreateFile(daoName);
  generateFindFirstFile(daoName);
  generateUpdateOneFile(daoName);
  generateFindManyFile(daoName);
  generateDeleteOneFile(daoName);
  generateFindByIdFile(daoName);
}

const daoName = process.argv[2];

if (!daoName) {
  console.error('Usage: node createFile.js <file-name> [directory]');
  process.exit(1);
}

generateFiles(daoName);
