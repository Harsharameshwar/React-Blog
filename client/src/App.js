import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Comment from './pages/comment/Comment';
import Example from './pages/comment/example';
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Account from "./pages/account/Account";

function App() {
  const {user}=useContext(Context);

  return (
    <>
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/write" element={user?<Write/>:<Register/>}/>
        <Route path="/settings" element={user?<Settings/>:<Register/>}/>
        {/* <Route path="/account" element={user?<Account/>:<Login/>}/> */}
        <Route path="/post/:postId" element={<Single/>}/>
        <Route path="/post/:postId/comment" element={user? <Comment><Example/></Comment>:<Login/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
