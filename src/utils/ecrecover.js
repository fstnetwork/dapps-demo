const ethers = require("ethers");

const utils = ethers.utils;

const hash_hello_world = utils.hashMessage("hello world");
const hash_你好世界 = utils.hashMessage("你好世界");

console.log(hash_hello_world);
console.log(hash_你好世界);

// do not use in other places, only for testing
const pk = "0x3dbef63d01cb65ccf1c2d142e15cfbdacb83e3bd241eabd540843a1dbccc2822";

const signing_key = new utils.SigningKey(pk);

console.log(signing_key.signDigest(hash_hello_world));
console.log(signing_key.signDigest(hash_你好世界));
