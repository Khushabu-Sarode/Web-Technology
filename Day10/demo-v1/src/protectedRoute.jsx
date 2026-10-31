import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) 
{
   //debugger;
   var nextPage = props.children.type.name;
   sessionStorage.setItem("nextpage", nextPage);
   var IsLoggedIn = sessionStorage.getItem("IsLoggedIn");
   //True or False value will come from SessionStorage
   if(IsLoggedIn!= null && IsLoggedIn == "true")
   {
    return <>{props.children}</>
   }
   else
   {
    return <Navigate to={"/login"} replace={"true"}/>
   }
}

export default ProtectedRoute;