import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import './write.css'


export default function Write() {
  const [file,setFile]=useState(null);
  const {user}=useContext(Context);
  const [post,setPost] =useState({
    photo:"",
    username:user.username,
    title:"",
    desc:""
  })

  function handleonChange(e){
    const {name,value}=e.target;
    setPost(prevNote => {
     return {
       ...prevNote,
       [name]: value
     };
   });

  }

 async function handleSubmit(e){
    e.preventDefault();
    if(file){
      const data=new FormData();
      const filename=Date.now() + file.name;
      data.append("name",filename)
      data.append("file",file)
      post.photo=filename;
      try{
        await axios.post("/upload",data);
      }
      catch(err){

      }
    }
    try{
      await axios.post("/posts",post);
      window.location.replace("/")

    }
    catch(err){}
    
  }

  return (
    <div className='write'>
    {file && (
    <img 
        src={URL.createObjectURL(file)} 
        alt=''
        className='writeImg'
        />
      )}
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type='file' id='fileInput' style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                <input type='text' placeholder='Title' name="title" className='writeInput' autoFocus={true} onChange={handleonChange}/>
            </div>
            <div className='writeFormGroup'>
                <textarea 
                placeholder='Tell your story....'
                type="text"
                className='writeInput writeText'
                name="desc"
                onChange={handleonChange}
                ></textarea>
            </div>
            <button className='writeSubmit' type='submit'>Publish</button>
        </form>
    </div>
  )
}
