// node crauc-template.js create-company ./company

const fs = require('fs');
const path = require('path');

function generateUseCaseFile(fileName, directory) {
  const className = fileName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('').replace(".ts", "");
  const classContent = `interface ${className}UseCaseProps {
    sub: string
    }

    export class ${className}UseCase {
      async execute({ sub }: ${className}UseCaseProps) {
        
      }
    }
    `;

  const filePath = path.join(`./src/use-cases/${directory}/${fileName}-use-case.ts`);

  fs.writeFile(filePath, classContent, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
      generateHttpFile(fileName, directory)
    }
  });
}

function generateHttpFile(fileName, directory) {
  const className = fileName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('').replace(".ts", "");
  const classContent = `import { Request, Response } from "express";
  import { ${className}UseCase } from '@/use-cases/${directory}/${fileName}-use-case';
  import { handleErrors } from '@/utils/handle-errors';

    export const ${className.charAt(0).toLowerCase() + className.slice(1)} = async (req: Request, res: Response) => {
      try {
        const {sub} = req.userState;
        
        const useCase = new ${className}UseCase();
        await useCase.execute({ sub })

        return res.status(200).send({ });
      } catch(err: any) {
        const errorMessage = handleErrors(err)

        return res.status(500).send({ message: errorMessage });
      }

    }
    `;

  const filePath = path.join(`./src/http/${directory}`, `${fileName}.ts`);

  fs.writeFile(filePath, classContent, err => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file created successfully.`);
    }
  });
}

const fileName = process.argv[2];
const directory = process.argv[3] || '.';

if (!fileName) {
  console.error('Usage: node createFile.js <file-name> [directory]');
  process.exit(1);
}

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

generateUseCaseFile(fileName, directory);
