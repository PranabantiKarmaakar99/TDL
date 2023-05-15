const next = require("next");
const http = require("http");
const express = require("express");

const app = next({ dev: false });

app.prepare().then(() => {
    const server = express();
  
    server.get("/", (req, res) => {
      return app.render(req, res, "/index");
    });
  
    http.createServer(server).listen(8000, () => {
      console.log("Server listening on http://localhost:8000");
    });
  });