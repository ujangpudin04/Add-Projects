const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const port = 5000;
let projects = [];

console.log(projects);

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    layout: "layouts/main-layout",
  });
});

app.get("/index", (req, res) => {
  res.render("index", {
    title: "Home",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "contact",
    layout: "layouts/main-layout",
  });
});

app.post("/add-project", (req, res) => {
  const data = req.body;

  console.log(data);

  data.author = "Ujang Pudin";
  data.postAt = new Date();

  projects.push(data);

  console.log(projects);

  res.redirect("/");
});

app.get("/add-project", (req, res) => {
  res.render("add-project", {
    title: "Add Project",
    layout: "layouts/main-layout",
    projects,
  });
});

app.get("/edit", (req, res) => {
  res.render("edit", {
    title: "Edit Project",
    layout: "layouts/main-layout",
  });
});

// Page Not Found
app.use("/", (req, res) => {
  res.status(404);
  res.render("404", {
    title: "Not Found",
    layout: "layouts/main-layout",
  });
});

app.listen(port, () => {
  console.log(`My App Runnning on port ${port}`);
});
