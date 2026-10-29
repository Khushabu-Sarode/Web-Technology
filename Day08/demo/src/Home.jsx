import { Component } from "react";

class Home extends Component {
    constructor() 
    {
        super();
        console.log("Home Object Created.")
    }

    state = {name: "Know-IT"}

    componentDidMount(){
        console.log("Component Did Mount Method Called.")
    }

    shouldUpdateOrNot = true;
    shouldComponentUpdate()
    {
        console.log("Should Component Update is called. By default returning true")
        // debugger;
        return this.shouldUpdateOrNot;

    }
    
    componentDidUpdate(){
        console.log("Component Did Update Method Called.")
    }

    ChangeText()
    {
        //this.state.name = "CDAC";
        this.setState({name : "CDAC"})
        console.log("ChangeText - SetState Called. State Value Changed!")
    }

    render() { 
        console.log("Render called.")
        return (<>
                    <h1>Welcome to {this.state.name}</h1>
                    <h2>Hi</h2>
                    <button onClick={()=>{
                        this.ChangeText()
                    }}>Click Me</button>
                </>);
    }


    // render() { 
    //     return (<div>
    //                 <h1>Welcome Home</h1>
    //                 <h2>Hi</h2>
    //             </div>);
    // }
}
 
export default Home;