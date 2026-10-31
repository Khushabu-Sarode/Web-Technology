
function grandchild(props) {
    console.log("Grandchild getting renderd....")
    return ( 
        <>
          <h1>This is GrandChild</h1>
          <h2>Data received from child is : {props.company} , {props.address}</h2>


        </>
     );
}

export default grandchild;