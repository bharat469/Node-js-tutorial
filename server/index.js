// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//   let log = `${Date.now()} new request recived ${req.url} \n`;
//   fs.appendFile("test.txt", log, (err, data) => {
//     switch (req.url) {
//       case "/":
//         res.end("THIS IS HOME PAGE");
//         break;
//       case "/about":
//         res.end("THIS IS ABOUT PAGE");
//         break;
//       default:
//         res.end("404 DATA NOT FOUND");
//         break;
//     }
//   });
// });

// myServer.listen(8000, () => console.log("Server Started"));

const http = require("http");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const myUrl = url.parse(req.url, true);

  switch (myUrl.pathname) {
    case "/":
      const userName = myUrl.query.myName ?? "default";
      const job = myUrl.query.job ?? "default";

      res.end(
        `SERVER HAS BEEN STARTED FOR HOME PAGE AND HI !! MY NAME IS ${userName} AND I WORK AS ${job}`
      );
      break;
    case "/about":
      res.end("SERVER HAS BEEN STRATED FOR ABOUT PAGE");
      break;
    default:
      res.end("404 NO PAGE FOUND");
      break;
  }
});

myServer.listen(8000, () => console.log("server has been started "));
