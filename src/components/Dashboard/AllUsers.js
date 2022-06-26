import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res =>res.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
               {
                users.map((user, index) => <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>)
               }
      
            </tbody>
        </Table>
    );
};

export default AllUsers;