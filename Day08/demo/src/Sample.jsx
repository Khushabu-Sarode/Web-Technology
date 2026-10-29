import { Component } from "react";


//IN js if we want to change something it will effect whole dom ,
//in react it use virtual dom which is light weight copy of actual dom if we want to change something it will refect in
// dom will create when index.html create.
class Sample extends Component {
    state = { emp : { name: "rohit", address: "Pune"} }
    
    Change()
    {
        // this.setState({emp: {name: "mohit", address: "Pune"}})
        
        // var copyOfEmp = {...this.state.emp};
        // copyOfEmp.name = "mohit";
        // this.setState({emp: copyOfEmp});

        // var copyOfEmp = {...this.state.emp, name: "mohit"};
        // this.setState({emp: copyOfEmp});


        this.setState({emp: {...this.state.emp, name: "mohit"}});

    }
    render() 
    { 
        return (<>
                    <h1>Name : {this.state.emp.name}</h1>
                    <h1>Address : {this.state.emp.address}</h1>
                    <button onClick={()=>{
                        this.Change();
                    }}>Click Me</button>
                </>);
    }
}
 
export default Sample;