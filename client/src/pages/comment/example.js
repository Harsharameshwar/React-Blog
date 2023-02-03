import React, { useEffect, useState,useContext } from 'react'
import {Comment, Header } from 'semantic-ui-react';
import Replycontent from './Replycontent';
import Content from './Content';
import axios from 'axios';
import SinglePost from '../../components/singlePost/SinglePost';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';


function Example(){
  const [comments,setComments]= useState();
  const pathname=window.location.pathname;
  const postId=pathname.split('/')[2];
  // const {user}=useContext(Context)
  // const PF = "http://localhost:5000/images/";


  useEffect(()=>{
    try{
    const fetchComments=async()=>{
      const res=await axios.get(`http://localhost:5000/api/comment/${postId}`);
      setComments(res.data);
    }
    fetchComments()
    // console.log(comments);
  }
  catch(err){console.log(err)}
  },)
 

    return(
      <>
      <div style={{'display':'flex'}}>
       <SinglePost/>
       <Sidebar/>
       </div>
    <Comment.Group>
       <Header as='h3' dividing>
         Comments
       </Header>
      {comments?.map((c)=>(
        <Content post={c}/>
       ))}
       <Replycontent/>
       </Comment.Group>
  </>
    )}

export default Example;
