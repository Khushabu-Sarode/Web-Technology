import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function LoggedInUserDetails() 
{
    const navigate = useNavigate();

    const [userName, setUserName] =  useState("Guest");

    useEffect(()=>{
        var uname =  sessionStorage.getItem("UserName");
        setUserName(uname);
    }, [])

    const SignOut = ()=>{
        sessionStorage.removeItem("UserName");
        sessionStorage.removeItem("IsLoggedIn");
         sessionStorage.removeItem("Token");
        navigate("/login", {replace: true});
    }
    return (<>
                <hr />
                <h3>Welcome {userName}</h3>
                <button onClick={SignOut}>Sign out</button>
                <hr />
            </>);
}

export default LoggedInUserDetails;