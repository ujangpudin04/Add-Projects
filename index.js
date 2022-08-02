const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const port = 5000;
let projects = [];
let edit = [];

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + "/public"));

app.post("/addProject", (req, res) => {
  const data = req.body;
  data.author = "Ujang Pudin";
  data.postAt = new Date();
  data.monthDifferent = monthDiff(
    new Date(data.endDate),
    new Date(data.startDate)
  );

  projects.push(data);
  // console.log(projects);
  res.redirect("/");
});

app.get("/addProject", (req, res) => {
  res.render("addProject", {
    title: "Add Project",
    layout: "layouts/main-layout",
    projects,
  });
});

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    layout: "layouts/main-layout",
    projects,
  });
});

app.get("/index", (req, res) => {
  res.render("index", {
    title: "Home",
    layout: "layouts/main-layout",
    projects,
  });
});

app.get("/detail/:index", (req, res) => {
  const indexDetail = req.params.index;
  // console.log(indexDetail);
  const project1 = projects[indexDetail];
  res.render("detail", {
    title: "Detail Project",
    layout: "layouts/main-layout",
    project1,
  });

  // console.log(projects);
});

// console.dir(req.originalUrl);
app.post("/edit/update/:index", (req, res) => {
  const id = req.params;
  console.log("----post-----");
  const data = req.body;
  data.id = id.index;
  data.author = "Ujang Pudin";
  data.postAt = new Date();
  data.monthDifferent = monthDiff(
    new Date(data.endDate),
    new Date(data.startDate)
  );
  // data lama
  console.log("---data lama---");
  console.log(projects);
  console.log("---lama-----");

  console.log("---data baru---");
  projects.splice(data.id, 1, data);

  console.log("---data baru---");

  // const dataPush = projects.map((project) => {
  //   const newProject = {
  //     ...project,
  //     id: data.id,
  //   };
  //   return newProject;
  // });
  res.redirect("/");
});

app.get("/edit/:index", (req, res) => {
  let id = req.params.index;
  // const project = projectEdit.find(({ id }) => id === id);
  const project = projects.map((project) => {
    const newProject = {
      ...project,
      id,
    };
    return newProject;
  });

  const projectEdit = project[id];

  console.log("------edit-----");
  // console.log(project);
  // const result = project.find(({ id }) => id === id);
  // console.log(project.description);
  // console.log(projectEdit);
  console.log("------edit-----");

  res.render("edit", {
    title: "Edit Project",
    layout: "layouts/main-layout",
    projectEdit,
    id,
  });
});

app.get("/delete/:index", (req, res) => {
  let indexEdit = req.params.index;
  // console.log(indexEdit);
  projects.splice(indexEdit, 1);
  res.redirect("/");
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "contact",
    layout: "layouts/main-layout",
  });

  res.redirect("/");
});

app.post("/contact", (err, req, res, next) => {
  res.redirect("/");
});

// Page Not Found
app.use("*", (req, res) => {
  res.status(404);
  res.render("404", {
    title: "Not Found",
    layout: "layouts/main-layout",
  });
});

app.listen(port, () => {
  console.log(`My App Runnning on port ${port}`);
});

function monthDiff(d2, d1) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
