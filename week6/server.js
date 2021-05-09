const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors())


var info={
    "university":"Postech",
    "group":"Poapper",
    "seminar":"front-end"
};

app.get("",(req,res)=>{
    res.json(info);
})

app.post("",(req,res)=>{
    console.log(req);
})

app.listen(8000,()=>console.log("Server running on 8000"));