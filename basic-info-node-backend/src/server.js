const { createServer } = require("node:http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;
const pageURL = new URL("http://localhost:8080/");

const server = createServer((req, res) => {
  let filename = "./src/content/index.html";

  if (req.url === "/contact-me") {
    filename = "./src/content/contact.html";
  } else if (req.url !== "/") {
    filename = "./src/content" + req.url + ".html";
  }
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end(`<h1>404 ${filename} NOT FOUND</h1><p>${req.url}</p>`);
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running: http://${hostname}:${port}`);
});
