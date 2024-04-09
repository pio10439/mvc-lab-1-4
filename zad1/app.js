const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { title: 'Home', heading: 'Home' });
});

app.get('/success', (req, res) => {
  res.render('success', { title: 'Success', heading: 'Success' });
});

app.get('/students-list', (req, res) => {
  res.render('list', { title: 'List', heading: 'List' });
});

app.get('/add-student', (req, res) => {
    res.render('list', { title: 'List', heading: 'List' });
  });
  
  app.post('/add-student', (req, res) => {
    res.redirect('/students-list');
  });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});