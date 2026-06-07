#!/usr/bin/env node
import os from 'os';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

async function main() {
  const fileName = 'common.json';
  const headersDir = path.join(os.homedir(), '.headers', fileName);
  const method = process.argv[2]?.toUpperCase()!;
  const url = process.argv[3]!;
  const body = process.argv[4];
  const res = await axios.request({
    method, url,
    params: body && JSON.parse(body),
    headers: JSON.parse(fs.readFileSync(headersDir, 'utf8')),
  });
  console.log('-- Response Code --');
  console.log(res.status);
  console.log();
  console.log('-- Response Body --')
  console.log(JSON.stringify(res.data, null, 2));
}

main();
