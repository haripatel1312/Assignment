// routes/index.js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET projects page. */
// In your Express route handler (projects.js)
router.get('/projects', function(req, res, next) {
  const projects = [
    {
      title: "Project 1",
      description: "A web development project.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/images/project1.jpg",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Project 2",
      description: "A full-stack project with Node.js.",
      technologies: ["Node.js", "Express", "MongoDB"],
      imageUrl: "/images/project2.jpg",
      liveUrl: "#",
      codeUrl: "#"
    }
    // More projects...
  ];

  res.render('projects', { title: 'Projects', projects: projects });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;