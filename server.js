const express = reqire('express');
const app = express();
const validator = require('validator');

//this is a get api with a good response
app.get("/",(req,res))
{
res.send("Hello world,running on the port 3000");
}

app.listen(3000);
