const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    // res.status(200).send("Hello world");
    res.status(200).send("<h1>Hello world</h1>");
});

app.get('/contact', (req,res)=>{
    res.status(200).send("<h1>Contact</h1>"); 
})

app.get('/about', (req,res)=>{
    res.status(200).send("<h1>This is about page</h1>"); 
})

app.get('/hobbies', (req,res)=>{
    res.status(200).send("<ul><li>Tea</li><li>Music</li><li>Cold Drink</li></ul>"); 
})

app.listen(port, ()=>{
    console.log("App is running at the port", port);
});