import { Link, Route, Routes } from "react-router-dom";
import Home from './home';
import Contact from './contact';
import About from './about';
import NotFound from "./notfound";
import Dashboard from "./dashboard";
import ProtectedRoute from "./protectedRoute";
import Login from "./login";
import Profile from "./profile";

function Launcher() 
{
    return (<>
    
            <hr></hr>
            <Link to={"home"}>Go Home</Link> { " | "}
            <Link to={"about-us"}>About</Link> { " | "}
            <Link to={"contact-us"}>Contact </Link> { " | "}
            <Link to={"db"}>Dashboard </Link> { " | "}
            <Link to={"profile"}>Profile </Link> { " | "}
            {/* <Link to={"login"}>Sign In </Link> { " | "} */}
            <hr></hr>

            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route  path="/contact-us" element={<Contact/>}/>
            <Route path="/about-us" element={<About/>}/>
            <Route path="/db" element={<ProtectedRoute>
                                            <Dashboard/>
                                        </ProtectedRoute>}/>
            <Route path="/profile" element={<ProtectedRoute>
                                            <Profile/>
                                        </ProtectedRoute>}/>                           
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
            </Routes>

            <hr></hr>

            </>);
}

export default Launcher;