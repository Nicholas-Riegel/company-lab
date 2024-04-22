const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const employees = require('./employees.js');
const homeData = require('./homeData.js');
const missionBriefings = require('./missionBriefings.js'); 
const linksData = require('./linksData.js')

app.get('/medic-elite', (req, res) => {
    res.render('home', {homeData});
});

app.get('/medic-elite/history', (req, res) => {
    res.render('history');
});

app.get('/medic-elite/missions', (req, res) => {
    res.render('missions', { missionBriefings }); 
});

app.get('/medic-elite/missions-data', (req, res) => {
    res.json(missionBriefings);
  });

app.get('/medic-elite/employees', (req, res) => {
    res.render('employees', {employees});
});

app.get('/medic-elite/contact', (req, res) => {
    res.render('contact');
});

app.get('/medic-elite/links', (req, res) => {
    res.render('links');
    res.render('links.ejs', {linksData})
});

app.get('/medic-elite/employees/:employeeID', (req, res) => {
    const employee = employees.find(employee => employee.employeeID === req.params.employeeID);
    res.render('employee', { employee });
});

const port = 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
