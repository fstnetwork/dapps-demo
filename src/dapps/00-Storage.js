require("dotenv").config();

const consola = require("consola");

const ethers = require("ethers");

const { provider } = require("../utils/provider");

const abi = require("../contracts/00-Storage.abi.json");

const contract_address = "0xB574cde9be3079f3e379833Fd6502d7434728E15";

const contract = new ethers.Contract(contract_address, abi, provider);

const wallet = new ethers.Wallet(process.env.SIGNER_PK, provider);

const event_filter = contract.filters.NumSet();
contract.on(event_filter, (old_value, new_value, timestamp, actor, txr) => {
  consola.info("event NumSet", { old_value, new_value, timestamp, actor, txr });
});

(async () => {
  const unsigned_tx_obj = await contract.populateTransaction.setNum(168);
  const tx_resp = await wallet.sendTransaction(unsigned_tx_obj);

  consola.info("tx signed & sent", tx_resp);

  const txr = await provider.getTransactionReceipt(tx_resp.hash);

  consola.info("txr", txr);
})();
