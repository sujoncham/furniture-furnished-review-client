import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://furniture-furnished-server.onrender.com/user')
        .then(res =>res.json())
        .then(data => setUsers(data));
    }, []);

    const myProfile = (id) =>{
        navigate(`/profile/${id}`);
      }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Email</th>
                <th>Action</th>
            
                </tr>
            </thead>
            <tbody>
               {
                users.map((user, index) => <tr index={index} key={user._id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td><button onClick={()=>myProfile(user._id)} className='btn btn-primary'>Edit</button></td>
       
                </tr>)
               }
      
            </tbody>
        </Table>
    );
};

export default AllUsers;