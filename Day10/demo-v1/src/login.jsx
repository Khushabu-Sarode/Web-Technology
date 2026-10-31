import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetPath from "./getpath";
function Login() {

    const navigate =  useNavigate();

    const [credentials, setCredentials]=  useState({UserName : "", Password : ""})
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        if(errorMessage!="")
        {
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        }
    }, [errorMessage])

    const OnTextChange = (args)=>{
        var copyOfCredentials = {...credentials};
        copyOfCredentials[args.target.name] = args.target.value;
        setCredentials(copyOfCredentials);
    }

    const SignIn = ()=>{
        if(credentials.UserName == "abc" && credentials.Password =="abc@123")
        {
            sessionStorage.setItem("UserName", credentials.UserName);
            sessionStorage.setItem("IsLoggedIn", true);
            var nextpage =  sessionStorage.getItem("nextpage")
            var path = GetPath(nextpage);
            navigate(path, {replace: "true"});
        }
        else
        {
            setErrorMessage("Crdentials are Invalid. Try Again.")
        }
    }
    return (<>
                <h1>Sign In Here</h1>
                <hr></hr>
                <table>
                    <tbody>
                        <tr>
                            <td>User Name</td>
                            <td>
                                <input type="text" name="UserName" value={credentials.UserName} onChange={OnTextChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" name="Password" value={credentials.Password} onChange={OnTextChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <button onClick={SignIn}>Sign In</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr></hr>
                <div style={{color: "red"}}>
                     {errorMessage}
                </div>
                <hr></hr>
            </>);
}

export default Login;