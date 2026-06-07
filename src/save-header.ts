#!/usr/bin/env node
import os from 'os';
import fs from 'fs';
import path from 'path';

async function main() {
  const fileName = 'common.json';
  const headersDir = path.join(os.homedir(), '.headers');
  const headersJSON = JSON.stringify(
    Object.fromEntries(
      process.argv
        .filter((_, index) => process.argv[index - 1] === '-H')
        .map((value) => value.split(': '))
    ), null, 2
  );
  console.log('-- Request Headers --');
  console.log(headersJSON);
  fs.mkdirSync(headersDir, { recursive: true });
  fs.writeFileSync(path.join(headersDir, fileName), headersJSON);
}

main();
