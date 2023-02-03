import React, {useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { Context } from '../../context/Context';
import axios from "axios";

export default function Replycontent(){
    const { user } = useContext(Context);
    const [desc,setDesc]=useState("")
    const pathname=window.location.pathname;
    const postId=pathname.split('/')[2];

    async function handleSubmit(e){
        const newPost={
            username:user.username,
            postid:postId,
            desc,
            profilePic:user.profilePic
        }
        console.log(newPost);
        try{
            await axios.post("http://localhost:5000/api/comment/",newPost);
          }
          catch(err){}
          e.target.reset();
          
    }
    return(<Form reply onSubmit={handleSubmit} >
      <Form.TextArea onChange={(e)=>{setDesc(e.target.value)}} />
      <Button type="submit" content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>)
  }
