import fs from "fs";

export interface CreateTableUseCase {
  execute: ( options :CreateTableOptions ) => string;
} 
export interface CreateTableOptions {
  base: number;
  limit?: number;
  fileName?: string;
  fileDestination?: string;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {

  }

  execute ({ base, limit = 10, fileDestination = 'outputs', fileName  }: CreateTableOptions) {
    let outputMessage = '';
    for(let i = 1; i <= limit; i++){
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    const outputPath = `${fileDestination}`;
    
    fs.mkdirSync(outputPath, { recursive: true });
    fs.writeFileSync(`${outputPath}/${fileName}.txt`, outputMessage);
    return outputMessage;
  }
}