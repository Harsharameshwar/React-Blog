import { createRef, useContext,useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import EscapeOutside from "react-escape-outside";

export default function TopBar() {
  const navigate=useNavigate();
  const container=createRef();
  const { user, dispatch } = useContext(Context);
  const [display,setDisplay]= useState(false);
  const [text,setText]=useState("")
  const [open,setOpen]= useState(false);
  const PF = "http://localhost:5000/images/"




  function handleLogout () {
    dispatch({ type: "LOGOUT" });
  };

  function handleChange(e){
    console.log(e.target.value)
    setText(e.target.value);
   }
 function handleKey(e){
  if (e.key === 'Enter') {
    console.log("Enter key is pressed") 
    navigate(`/?title=${text}`)
  }
  console.log(text)
 }
 function handleClick(){
  setOpen(true)
}
function handeKey(event){
  if(event.key==='Escape'){console.log("Esc is pressed")}
}
function handleOutside(event){
  if (
    container.current &&
    container.current.contains(event.target)
  ) {
   setOpen(false);
  }
}
  return (
    <div className="top" ref={container}>
      <div className="topLeft">
      <a href="https://facebook.com"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://twitter.com"><i className="topIcon fab fa-twitter-square"></i></a>
        <a href="mailto:harsharameshwar@gmail.com"><i className="topIcon fa-solid fa-envelope"></i></a>
        <a href="https://instagram.com"><i className="topIcon fab fa-instagram-square"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
            WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">
             REGISTER
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight" onKeyDown={handeKey} ref={container} onMouseDown={handleOutside}>
        {user ? (
          <div>
            <img onClick={handleClick} className="topImg" src={PF+user.profilePic} alt="" />
          {open && (
            <div className="dropdown">
          <ul className="dropdownul" >
              {/* <li className="dropdownli" onMouseDown={()=>{navigate('/account')}}>ACCOUNT</li> */}
              <li className="dropdownli" onMouseDown={()=>{navigate('/settings')}} >SETTINGS</li>
              <li className="dropdownli" onMouseDown={handleLogout}>{user && "LOGOUT"}</li>
          </ul>
      </div>
      )}
      </div>
        ) : (
          <ul className="topList">
            <li className="topListItem" >
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        <EscapeOutside onEscapeOutside={()=>{setDisplay(false); }}>
        {display &&<><input className="input-search" type="text" onChange={handleChange} onKeyDown={handleKey}/></>}
        <i className="topSearchIcon fas fa-search" onClick={()=>{setDisplay(true)}}></i>
        </EscapeOutside>
        </div>
    </div>
  );
}

