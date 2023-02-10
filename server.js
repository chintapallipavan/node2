const express = require('express');
const app = express();

app.get('/home',(requestobject,responseObject)=>{
    responseObject.send("welcome home");
});

app.get('/about',function(requestobject,responseObject){
    responseObject.send("Welcome to About Us page");
});

app.get('/node',function(requestobject,responseObject){
    responseObject.send("Welcome to my Node Js project");
});

app.listen(8000,function(){
    console.log(`server running ...`);
})

