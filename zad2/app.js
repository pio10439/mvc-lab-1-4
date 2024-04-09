const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', studentsController.getAddNewStudentPage);

app.get('/success', (req, res) => {
  res.render('success', { title: 'Success', heading: 'Success' });
});

app.get('/students-list', (req, res) => {
  res.render('list', { title: 'List', heading: 'List' });
});

app.get('/add-student', studentsController.getAddNewStudentPage);

app.post('/add-student', (req, res) => {
  res.redirect('/students-list');
});

app.use(errorController.getNotFoundPage);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
