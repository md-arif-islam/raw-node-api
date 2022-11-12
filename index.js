/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: MD Arif Islam
 * Date: 12 Nov 2022
 */

// Dependencies
const http = require("http");
const url = require("url");

//  app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening port on ${app.config.port}`);
  });
};

app.handleReqRes = (req, res) => {
  // request handle
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  // response handle
  res.end("Hello Programmers");
};

//start server

app.createServer();
