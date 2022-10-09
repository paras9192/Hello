const express = reqire('express');
const app = express()

app.get("/",(req,res))
{
res.send("Hello world,running on the port 3000");
}

app.listen(3000);
