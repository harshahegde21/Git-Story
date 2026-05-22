#!/usr/bin/env node

const showStory = require("../src/story");

const arg = process.argv[2];

if(arg === "--version") {
    console.log("1.0.0");
}
else {
    showStory();
}