import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Test2 extends Component {
    state =   { emps: [] } ; //data will come in the form of json from backend
    //npm i -g npm@10.9.2

    componentDidMount()
    {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                var empsData = JSON.parse(helper.responseText);
                this.setState({emps : empsData});
            }
        };
        helper.open("GET", "http://localhost:5173/emps.json");
        helper.send();
    }

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
 
export default Test2;







