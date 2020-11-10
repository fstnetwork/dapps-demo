const ethers = require("ethers");

module.exports.provider = new ethers.providers.JsonRpcProvider(
  "https://rinkeby.infura.io/v3/3ebd8af0f7a54f7998b9f08825a84329"
);
