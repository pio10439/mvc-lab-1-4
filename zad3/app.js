const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', studentsController.getAddNewStudentPage);

app.get('/success', studentsController.getAddingNewStudentSuccessPage);

app.get('/students-list', studentsController.getStudentsListPage);

app.get('/add-student', studentsController.getAddNewStudentPage);

app.post('/add-student', studentsController.addStudent);

app.use(errorController.getNotFoundPage);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
