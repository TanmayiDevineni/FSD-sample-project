const exp=require('express')
const {read}=require('fs')
const router=exp.Router()
const schema=require('../model/model')
router.get('/',async(req,res)=>{
    try{
        const a=await schema.find()
        res.json(a)
    }catch(err){
        res.send("error"+err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const a1=await schema.findById(req.params.id)
        res.json(a1)
    }
    catch(err){
        res.send("Error:"+err)
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const a2=await schema.findById(req.params.id)
        a2.tech=req.body.tech
        const a3=a2.save()
        res.json(a3)
    }catch(err){
        res.send("Error"+err)
    }
})
router.post('/',async(req,res)=>{
    const x=new schema(
        {
            name:req.body.name,
            tech:req.body.tech,
            section:req.body.section
        }
    )
    try{
        const x1=await x.save()
        res.json(x1)
            }catch(err){
                res.send("Error"+err)
            }
})
module.exports=router