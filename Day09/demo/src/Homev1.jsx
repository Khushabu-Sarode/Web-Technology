import { useState } from "react";

function Homev1() {
     const [name, setname] = useState("Knowit")

     const change = ()=>{ 
         setname("Cdac");
     }
     
     console.log("version v1 of home")
    return ( <>
        <h1>Welcome to {name}</h1>
        <button onClick={change}>Click me</button>
    </>
     );
}

export default Homev1;