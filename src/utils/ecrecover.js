require("dotenv").config();

const consola = require("consola");

const ethers = require("ethers");

const utils = ethers.utils;

// calculate the hash of the msg via https://eips.ethereum.org/EIPS/eip-191
const hash_hello_world = utils.hashMessage("hello world");
const hash_你好世界 = utils.hashMessage("你好世界");

consola.info(hash_hello_world);
consola.info(hash_你好世界);

// do not use in other places, only for testing
const pk = process.env.SIGNER_PK;

// create the signing key instance
const signing_key = new utils.SigningKey(pk);

// sign the hashes to obtain the digital signature
consola.info(signing_key.signDigest(hash_hello_world));
consola.info(signing_key.signDigest(hash_你好世界));
