import express from "express";
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); //body parser for POST
var router = express.Router();
console.log("Heelo NODEJS");

app.get("/get", (req, res) => {
    res.json("test");
});

app.post("/post", (req, res) => {
    res.json(req.baseUrl)
});

app.listen(3000);

