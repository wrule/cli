#!/usr/bin/env node

async function main() {
  const headers = JSON.parse(JSON.stringify(
    Object.fromEntries(
      process.argv
        .filter((_, index) => process.argv[index - 1] === '-H')
        .map((value) => value.split(': '))
    )
  ));
  console.log(headers);
}

main();
