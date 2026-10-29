import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Test extends Component {
    state = 
    { 
        emps: [ {No : 1, Name : "Rohit", Address: "Mumbai"},
                {No : 2, Name : "Mahendra", Address: "Chennai"},
                {No : 3, Name : "Virat", Address: "Delhi"},
                {No : 4, Name : "Rahul", Address: "Banglore"},
                {No : 5, Name : "Hardik", Address: "Mumbai"}
              ] } ;


    render() { 
        return (<div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>No</th><th>Name</th><th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.emps.map((emp)=>{
                                    return (<tr key={emp.No}>
                                                <td>{emp.No}</td>
                                                <td>{emp.Name}</td>
                                                <td>{emp.Address}</td>
                                            </tr>);
                                })
                            }
                        </tbody>
                    </table>
                </div>);
    }
}
 
export default Test;







