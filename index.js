#! /usr/bin/env node

const { program } = require('commander')

program.command("test")
    .description("This is a test command")
    .action(testFunc);
program.parse()

function testFunc() {
   console.log("sample command");
}

module.exports = testFunc;