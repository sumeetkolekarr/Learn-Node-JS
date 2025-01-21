const { readFile, writeFile } = require("fs");

// const first = readFileSync('./first.txt', 'utf-8');
// const second = readFileSync('./second.txt', 'utf-8');
// console.log(first, second);

// Default flag is write (w)
// writeFileSync('./result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})

readFile("./first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;
  readFile("./second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;
    writeFile(
      "./result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err,res)=>{
        if (err) {
            console.log(err);
            return
        }
        console.log(res);
      }
    );
  });
  console.log(res);
});
