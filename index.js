const express = require('express');
const app = express();
const port = 3000;


app.get ("/zodiaco/:fechanacimiento",(req,res)=>{
    res.send(req.params.fechanacimiento)
});
app.get ("/chino/:fechachino",(req,res)=>{
    res.send(req.params.fechachino)
});


app.listen(port, ()=> {
console.log(`server listening port ${port}`)
});