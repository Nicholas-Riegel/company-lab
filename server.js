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
app.get('/medic-elite/links', (req, res) => {
    res.render('links.ejs')
});

// app.get('/menu/:category', (req, res)=>{

//     let category = req.params.category;
//     const menuItems = RESTAURANT.menu.filter(x => x.category === category)
//     category = category.charAt(0).toUpperCase() + category.slice(1)

//     res.render('category.ejs', {menuItems, category})
    
// })

const port = 3000;

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})