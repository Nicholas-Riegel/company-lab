const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const employees = require('./employees.js');
const homeData = require('./homeData.js');
const missionBriefings = require('./missionBriefings.js'); 
const linksData = require('./linksData.js')

app.get('/', (req, res) => {
    res.render('home', {homeData});
});

app.get('/history', (req, res) => {
    res.render('history');
});

app.get('/missions', (req, res) => {
    res.render('missions', { missionBriefings }); 
});

app.get('/missions-data', (req, res) => {
    res.json(missionBriefings);
  });

app.get('/employees', (req, res) => {
    res.render('employees', {employees});
});

app.get('/employees-data', (req, res) => {
    res.json(employees);
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/links', (req, res) => {
    res.render('links', {linksData});
});

app.get('/employees/:employeeID', (req, res) => {
    const employee = employees.find(employee => employee.employeeID === req.params.employeeID);
    res.render('employee', { employee });
});

const port = 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
