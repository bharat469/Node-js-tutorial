const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  let data = ` \ntoday date is  ${new Date().toDateString()} and the request done is ${
    req.path
  }\n `;
  fs.appendFile("log.txt", data, () => {
    next();
  });
});

const usersData = require("./MOCK_DATA.json");
const { stringify } = require("querystring");

// GETTING ALL THE USERS

app.get("/api/users", (req, res) => {
  return res.json(usersData);
});

// RENDRING HTML WITH JSON DATA

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${usersData
      .map(
        (item) =>
          `<li> userName : ${item.first_name}</li>\n<li>email :${item.email}</li>`
      )
      .join("")}
    </ul>
    `;
  res.send(html);
});

// GETTING SPECIFIC DATA

// app.get("/api/users/:id", (req, res) => {
//   let userId = Number(req.params.id);
//   console.log(userId, "skldlshd");
//   const findaData = usersData.find((item) => {
//     return item.id === userId;
//   });

//   res.json(findaData);
// });

// GET REQUEST USING ROUTES

app
  .route("/api/users/:id")
  .get((req, res) => {
    let userId = Number(req.params.id);
    const findaData = usersData.find((item) => {
      return item.id === userId;
    });

    res.json(findaData);
  })
  .patch((req, res) => {
    let userId = Number(req.params.id);
    let body = req.body;
    const users = JSON.parse(fs.readFileSync("MOCK_DATA.json", "utf-8"));
    const userIndex = users.findIndex((u) => u.id === userId);

    users[userIndex] = { ...users[userIndex], ...body };
    fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      res.json({ stautus: "SuccessfullyUpdated", data: usersData[userIndex] });
    });
  })
  .delete((req, res) => {
    let userId = Number(req.params.id);
    let deleteId = usersData.filter((item) => item.id !== userId);
    fs.writeFile("MOCK_DATA.json", JSON.stringify(deleteId), (err, data) => {
      res.json({ status: "SUCCESSFULLY DELETED" });
    });
  });

//create a account
app.post("/api/users", (req, res) => {
  const body = req.body;

  usersData.push({ ...body, id: usersData.length + 1 });

  fs.writeFile("MOCK_DATA.json", JSON.stringify(usersData), (err, data) => {
    res.json({ status: "NEW ENTRY CREATED", id: usersData.length });
  });
});

app.listen(port, () => console.log("server has been started"));
