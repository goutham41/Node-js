const http = require("http");
const port = 8080;
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    fs.readFile("./index.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log("Error");
      }
      res.end(data);
    });
  }
  if (req.url === "/products") {
    res.setHeader("Content-Type", "application/json");
    res.end("[1,2,3,4,5]");
  }
  if (req.url === "/file") {
    fs.readFile("./data.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log("Error");
      }
      res.end(data);
    });
  }
  if (req.url === "/file/stream") {
    const stream = fs.createReadStream("./text.txt");
    stream.pipe(res);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:8080`);
});
