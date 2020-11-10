const consola = require("consola");

consola.log("0x" + Buffer.from(process.argv[2], "utf8").toString("hex"));
