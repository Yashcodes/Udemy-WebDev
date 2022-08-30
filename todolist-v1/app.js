const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js')

const app = express();
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
console.log(date);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("static"));

app.get("/", (req, res) => {
  
  // let currentDay = today.getDay();
  // let day = "";

  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // } else {
  //   day = "Weekday";
  // }

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.error(`Current day is equal to ${currentDay}`);
  // }

  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
  console.log(req.body);

  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get('/about', (req, res)=>{
  res.render('about');
})

app.listen(80, () => {
  console.log("Server running on port 80");
});
