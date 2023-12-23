const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/": {
      handleFile("./htmlFiles/index.html", "text/html", res);
      break;
    }
    case "/about": {
      handleFile("./htmlFiles/about.html", "text/html", res);
      break;
    }
    case "/contact-me": {
      handleFile("./htmlFiles/contact-me.html", "text/html", res);
      break;
    }
    case "/styles.css": {
      handleFile("./styles.css", "text/css", res);
      break;
    }
    case "/defaultStyles/meyer-reset-1st.css": {
      handleFile("./defaultStyles/meyer-reset-1st.css", "text/css", res);
      break;
    }
    case "/defaultStyles/my-css-reset-2nd.css": {
      handleFile("./defaultStyles/my-css-reset-2nd.css", "text/css", res);
      break;
    }
    case "/defaultStyles/normalize-3rd.css": {
      handleFile("./defaultStyles/normalize-3rd.css", "text/css", res);
      break;
    }
    case "/defaultStyles/typography-4th.css": {
      handleFile("./defaultStyles/typography-4th.css", "text/css", res);
      break;
    }
    default: {
      handleFile("./htmlFiles/404.html", "text/html", res);
    }
  }
});

const handleFile = (path, contentType, res) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Internal server error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.write(data);
      res.end();
    }
  });
};

const port = 8080;

server.listen(port, () => {
  console.log("server is listening on port: " + port);
});
