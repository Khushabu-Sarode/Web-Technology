
import Grandchild from "./grandchild";

function child(props) {

    console.log("child getting rendered");

    return (
     <>
      <h1>This is child</h1>
      <h2>This child recieved data from parent : {props.company} , {props.address} </h2>
      {/* <button onClick()=>{
            props.changefromparent("mumbai")
        }> */}

        <button onClick={props.changefromparent}>
        Change address of as child
        </button>

      
      <hr />
      <hr />

       
       <Grandchild companany = {props.company} address = {props.address} />

       
     </>

      );
}

export default child;