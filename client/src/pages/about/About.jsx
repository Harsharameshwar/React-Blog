import React from 'react'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import "./about.css";

export default function About() {
  return (
    <div>
    <Header/>
    <div className='about'>
    <div class="testimonial">
        <h1 className='Header'>ABOUT US</h1>
        <div>
        </div>
        <div class="row">
        <div class="testimonial-col">
        <div className='item1'>           
        <img src='image21.jpeg' alt='Student'/>
                <p>
                    GoDaddy's website builder, formally called Websites + Marketing, is an online editing and publishing 
                    tool that helps you make a responsive website with no technical knowledge required.
                    GoDaddy's website builder, formally called Websites + Marketing, is an online editing and publishing 
                </p>
                <h3>Harsha</h3>
          </div>
          <div class="testimonial-col">
            <div className='item1'>
            <img src="image12.jpeg" alt="Student"/>
            <div>
                <p>
                    GoDaddy 's website builder, formally called Websites + Marketing, is an online editing and publishing 
                    tool that helps you make a responsive website with no technical knowledge required.
                    GoDaddy 's website builder, formally called Websites + Marketing, is an online editing and publishing 
                </p>
                <h3>Kruthik</h3>
            </div>
        </div>
        </div>
    </div> 
    </div>  
    </div>
    </div>
    </div>
  )
}
