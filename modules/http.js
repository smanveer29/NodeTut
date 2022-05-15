const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("afafajcajfaufafafbauiobfibhfia uoahfia");
  }
  if (req.url === "/") {
    res.write("Hello sfnafasjkbafa");
    res.end();
  }
  res.end(`<h1>OOPS! lassan galat page aa</h1>
  <a href="/about">Back to home</a>
  `);
});

server.listen(2908);
