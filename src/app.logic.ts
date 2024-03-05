import fs, { mkdirSync } from 'fs';
import { yarg } from './config/plugins/args.plugin';

const base  = yarg.b;
const limit = yarg.l;
const show  = yarg.s;
const nameFile  = yarg.n;
const destinationFile  = yarg.d;

const outputMessageHeader = `
=======================
=======================
    Tabla del ${base}
=======================
=======================\n
`;
let outputMessage = ``;
for(let i = 1; i <= limit; i++){
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

if (show) console.log(outputMessageHeader + outputMessage);

const outputPath = `${destinationFile}`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/${nameFile}.txt`, outputMessageHeader + outputMessage);
console.log('File created!');