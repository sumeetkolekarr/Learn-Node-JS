const { createReadStream } = require("fs");

const stream = createReadStream("./big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

// default 64kb
// last buffer - remainder
// highWaterMark - Control Size

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
