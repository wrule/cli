#!/usr/bin/env node
import os from 'os';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

async function main() {
  const fileName = 'common.json';
  const headersPath = path.join(os.homedir(), '.headers', fileName);
  const headers = JSON.parse(fs.readFileSync(headersPath, 'utf8'));
  const baseUrl = headers['x-req-baseurl'];
  delete headers['x-req-baseurl'];

  const method = process.argv[2]?.toUpperCase()!;
  const url = path.join(baseUrl, process.argv[3]!);
  const body = process.argv[4];
  const res = await axios.request({
    method, url,
    data: body && JSON.parse(body),
    headers,
  });
  console.log('-- Response Code --');
  console.log(res.status);
  console.log();
  console.log('-- Response Body --')
  console.log(JSON.stringify(res.data, null, 2));
}

main();
