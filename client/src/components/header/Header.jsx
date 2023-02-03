import React from 'react'
import "./header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Blog</span>
        </div>
        <img className='headerImg' src='home.avif'
         alt=''/>
    </div>
  )
}
