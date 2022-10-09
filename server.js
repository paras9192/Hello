const express = reqire('express');
const app = express();

//this is a get api
app.get("/",(req,res))
{
res.send("Hello world,running on the port 3000");
}

app.listen(3000);
