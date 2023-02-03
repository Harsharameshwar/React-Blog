import React, {useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { Context } from '../../context/Context';
import axios from "axios";

export default function SubReply(postId){
    const { user } = useContext(Context)
    const [desc,setDesc]=useState("")

    async function handleSubmit(e){
        const newPost={
            username:user.username,
            desc,
            profilePic:user.profilePic
        }
        try{
            await axios.post(`http://localhost:5000/api/comment/subcomment/${postId.postId}`,newPost);
          }
          catch(err){console.log(err)}
          e.target.reset();
          window.location.reload(false);
          
    }
    return(<Form reply onSubmit={handleSubmit} >
      <Form.TextArea onChange={(e)=>{setDesc(e.target.value)}} height="20px" width="20px" />
      <Button type="submit" content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>)
  }