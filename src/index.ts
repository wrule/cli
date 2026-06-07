#!/usr/bin/env node
import axios from 'axios';

async function main() {
  const method = process.argv[2]?.toUpperCase();
  const url = process.argv[3];
  const bodyJSON = process.argv[4];
  axios.request({
    method: 'POST',
    url: '',
  })
}

main();
