const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use('/public',express.static("public"));

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})

app.post('/',function(req,res)
{
    var id=req.body.email;
    var pas=req.body.password;
    console.log(id,pas);
    res.sendFile(__dirname+'/fail.html');
    
})

app.listen(process.env.PORT || 3000);


// api key 18b0a11d32ecedcf54f814c0b928e843-us1