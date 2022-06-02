let fs = require("fs");
const http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello");
  } else if ((req.url = "/textasync")) {
    let data = fs.readFileSync("./data.txt", { encoding: "utf-8" });
    return res.end(data);
  } else if ((req.url = "/textsync")) {
    fs.readFile("./data.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log("error", err.message);
      }
      return res.end(data);
    });
  } else if ((req.url = "/textstream")) {
    let stream = fs.createReadStream("./data.txt");
    return stream.pipe(res);
  }
});

server.listen(8080, () => {
  console.log("http://localhost:8080/");
});
