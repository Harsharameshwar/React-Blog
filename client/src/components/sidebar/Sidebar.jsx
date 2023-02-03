import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "./sidebar.css"

export default function Sidebar() {
  const [cats,setCats]=useState([])
  const [users,setUsers]=useState([]);
  const {user}=useContext(Context);

  useEffect(()=>{
    const getCats=async()=>{
      const res=await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
    const getUsers=async()=>{
      const res=await axios.get("/users/all/user")
      setUsers(res.data);
    }
    getUsers();
  },[])
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>AUTHORS</span>
            <ul className='sidebarList'>
            {users.map((u)=>(
              <Link className='link' to={`/?user=${u.username}`}><li className='sidebarListItem'>{u.username}</li></Link>
            ))}
               
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
            {cats.map((p)=>(
              <Link className='link' to={`/?cat=${p.name}`}><li className='sidebarListItem'>{p.name} </li></Link>
            ))}
               
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>
                FOLLOW US
            </span>
            <div className='sidebarSocial'>
            <a href="https://facebook.com"><i className="topIcon fab fa-facebook-square"></i></a>
            <a href="https://twitter.com"><i className="topIcon fab fa-twitter-square"></i></a>
            <a href="mailto:harsharameshwar@gmail.com"><i class="topIcon fa-solid fa-envelope"></i></a>
            <a href="https://instagram.com"><i className="topIcon fab fa-instagram-square"></i></a>
            </div>
        </div>
    </div>
  )
}
