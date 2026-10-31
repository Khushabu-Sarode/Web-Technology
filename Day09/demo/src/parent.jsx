import { useState } from "react";
import Child from "./child";

function parent() {

     const [address,setaddress] = useState("pune")

     const change = () => {
        setaddress("Mumbai");
     }

     return (
        <>
          <h1>This is parent</h1>
          <button onClick={change} > Change Address </button>
           <hr />
           <hr />

         <Child compant = "Knowit" address = {address} changefromparent = {change} />

        </>
     );
}

export default parent;