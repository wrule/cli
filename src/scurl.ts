#!/usr/bin/env node
import os from 'os';
import fs from 'fs';
import path from 'path';

async function main() {
  const baseUrl = new URL(process.argv[2]!).origin;
  const fileName = 'common.json';
  const headersDir = path.join(os.homedir(), '.headers');
  const headersJSON = JSON.stringify(
    Object.fromEntries(
      process.argv
        .filter((_, index) => process.argv[index - 1] === '-H')
        .map((value) => value.split(': '))
        .concat([[`x-req-baseurl`, baseUrl]])
    ), null, 2
  );
  console.log('-- Request Headers --');
  console.log(headersJSON);
  fs.mkdirSync(headersDir, { recursive: true });
  fs.writeFileSync(path.join(headersDir, fileName), headersJSON);
}

main();
