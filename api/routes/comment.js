const router = require("express").Router();
const Comment = require('../models/model');
const mongoose=require('mongoose')


router.get("/:postId",async(req,res)=>{
    try{
    const comments= await Comment.find({postId:req.params.postId});
    res.status(200).json(comments);
    }
    catch(err){
        console.log(err);
    }
})
router.post("/",async(req,res)=>{
    try{
    const comment = new Comment({
        username:req.body.username,
        desc:req.body.desc,
        postId:req.body.postid,
        profilePic:req.body.profilePic
    })
    const comm=  await comment.save();
    res.status(200).json(comm);
}
catch(err){console.log(err);}
})

router.post("/subcomment/:id",async(req,res)=>{
    try{
        const subid=mongoose.Types.ObjectId();
        const subcomment= {
            "_id" : subid,
            "username":req.body.username,
            "desc":req.body.desc,
            "profilePic": req.body.profilePic,
            "date":new Date().toDateString(),
            "parentid":req.params.id
        }
        const subcomm=await Comment.findByIdAndUpdate(req.params.id,{
            "$push":{subComment: subcomment}
        })
        res.status(200).json(subcomm)
    }
    catch(err){console.log(err)}
})


module.exports = router;