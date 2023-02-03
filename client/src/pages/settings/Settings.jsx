import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [user1,setuser] = useState({
    userId:user._id,
    username:user.username,
    email:user.email,
  })
  const [success, setSuccess] = useState(false);


  const PF = "http://localhost:5000/images/"


  function handleChange(event){
    const {name,value}=event.target;
    setuser(prevUser => {
      return {
        ...prevUser,
        [name]: value
      };
    });
  }

 function onDelete(){
    try{
    const q=window.confirm("Are you sure you want to delete this account?");
    if(q){
    const res=axios.delete("/users/"+ user1.userId);
    dispatch({ type: "LOGOUT" });
    }
    }
    catch(err){
      console.log(err)
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      user1.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id,user1 );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.reload(false)
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={onDelete}>Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={user1.username}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={user1.email}
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
}