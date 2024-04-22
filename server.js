const express = require('express');
const app = express();

app.get('/medic-elite', (req, res) => {
    res.render('home.ejs')
});
app.get('/medic-elite/history', (req, res) => {
    res.render('history.ejs')
});
app.get('/medic-elite/work', (req, res) => {
    res.render('work.ejs')
});
app.get('/medic-elite/employees', (req, res) => {
    res.render('employees.ejs')
});
app.get('/medic-elite/contact', (req, res) => {
    res.render('contact.ejs')
});
app.get('/medic-elite/links', (req, res) => {
    res.render('links.ejs')
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})