import React from 'react'
import { Table } from 'react-bootstrap';

function UsersData() {
    const obj = JSON.parse(localStorage.getItem("record"))
console.log(obj)
  return (
    
    <div>
       <Table striped bordered hover>
                <tbody>
                    <tr>
                    <th>ID</th>
                        <th>userName</th>
                        <th>Email</th>
                        <th>password</th>
                    </tr>
{obj.map((value) =>{
  return(
    <tr>
    <th>{value.id}</th>
    <th>{value.userName}</th>
    <th>{value.email}</th>
    <th>{value.password}</th>
    </tr>
   
  )

})}
 </tbody>
 </Table>
    </div>
  )
}

export default UsersData;