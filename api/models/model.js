const mongoose=require("mongoose");

const CommentSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"",
        required:false
    },
    subComment:{ 
        type: Array,
        required:false
    }
},
    {timestamps:true}
);

module.exports=mongoose.model("Comment",CommentSchema);