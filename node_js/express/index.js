const express=require('express');

const app=express();
const PORT=3000;


app.get('/',function(req,res){
    res.send('Welcome to first page!');
});
app.post('/home',function(req,res){
    res.send('Welcome to home page!');
});


app.listen(PORT,function process(){
    console.log(`Server started at ${PORT}`);
});