import { useState } from "react";
import LoggedInUserDetails from "./loggedInUserDetails";

function Dashboard() {

    const [emp, setEmp] =  useState({No : 0, Name: "", Address: ""});
    const [emps, setEmps] = useState([]);

    const OnTextChange = (args)=>{
          var copyOfEmp = {...emp};
          copyOfEmp[args.target.name] = args.target.value;
          setEmp(copyOfEmp);      
    }

    const AddRecord = ()=>{
        var copyOfEmps = [...emps];
        var copyOfEmp = {...emp};
        copyOfEmps.push(copyOfEmp);

        setEmps(copyOfEmps)
        setEmp({No : 0, Name : "", Address: ""})
        
    }
    return (<>
             <LoggedInUserDetails/>
               <hr></hr>
                <table>
                    <tbody>
                        <tr>
                            <td>No</td>
                            <td>
                                <input type="text" name="No" value={emp.No} 
                                onChange={OnTextChange}/>
                            </td>
                        </tr>

                           <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="Name" value={emp.Name}
                                 onChange={OnTextChange}/>
                            </td>
                        </tr>

                         <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" name="Address" value={emp.Address}
                                 onChange={OnTextChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={AddRecord}>Add Record</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr></hr>
                <table>
                    <thead>
                        <tr>
                            <th>No</th><th>Name</th><th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emps.map((e)=>{return <tr key={e.No}>
                                                        <td>{e.No}</td>
                                                        <td>{e.Name}</td>
                                                        <td>{e.Address}</td>
                                                    </tr>})
                        }
                    </tbody>
                </table>
            </>);
}

export default Dashboard;