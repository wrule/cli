#!/usr/bin/env node
import os from 'os';
import fs from 'fs';
import path from 'path';

async function main() {
  const fileName = 'common.json';
  const headersDir = path.join(os.homedir(), '.headers');
  const headers = JSON.parse(JSON.stringify(
    Object.fromEntries(
      process.argv
        .filter((_, index) => process.argv[index - 1] === '-H')
        .map((value) => value.split(': '))
    )
  ));
  console.log(headers);
  fs.mkdirSync(headersDir, { recursive: true });
  fs.writeFileSync(
    path.join(headersDir, fileName),
    JSON.stringify(headers, null, 2),
  );
}

main();
