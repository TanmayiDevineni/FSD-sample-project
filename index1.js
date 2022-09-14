const exp=require('express');
const m=require('mongoose')
const bodyparser=require('body-parser')
const url='mongodb://localhost/db'
const cors=require('cors')

m.connect(url,{useNewUrlParser:true})
const app=exp();
const con=m.connection

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))

con.on('open',function(){
    console.log("welcome");
})

app.use(exp.json())
const r=require('./controller/controller')
app.use('/student',r)

app.listen(9000,()=>{
    console.log("server connected")
})