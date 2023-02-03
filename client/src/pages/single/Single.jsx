import React from 'react'
import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import { Link, useNavigate } from 'react-router-dom';


export default function Single() {
 const pathname=window.location.pathname;
 const postId = pathname.split('/')[2];
 const navigate=useNavigate()

 function performClick(){
  navigate(`/post/${postId}/comment`);
 }
  return (
    <>
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
    <div className='Comment-Section'>
    <button className="settingsSubmit" onClick={performClick}>
            Comment
          </button>
    </div>
    </>
  )
}
