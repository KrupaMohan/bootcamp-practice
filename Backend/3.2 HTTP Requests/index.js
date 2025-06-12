import express from "express";
const app = express();
const port = 3000;

// app.get("/",(req,res)=>{
//     console.log(req.rawHeaders);
// });

app.get("/",(req,res)=>{
    res.send("<h1>Home Page<h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About me</h1><p>My name is Krupa Mohan</p>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact me</h1><p1>My number</p>");
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});