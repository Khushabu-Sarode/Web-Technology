import { useEffect, useState } from "react";

function Home() 
{

    const [emp, setEmp] =   useState({name: "rohit", address: "pune"})


    useEffect(()=>{
        console.log(" - as if component did mount is called.")
    },[])

    useEffect(()=>{
        console.log(" - as if component did update is called because emp / state chanhed")
    },[emp])

    const Change = ()=>{
        var copyOfEmp = {...emp};
        copyOfEmp.name = "mohit";

        setEmp(copyOfEmp)
    }

    console.log(" -as if render is getting called")
    return (<>
                <h1>Name : {emp.name}</h1>
                <h2>Address : {emp.address}</h2>
                <button onClick={Change}>Click Me</button>
            </>);
}

export default Home;