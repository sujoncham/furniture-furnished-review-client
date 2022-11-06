import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const HomeDashboard = () => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect( ()=>{
        fetch('https://furniture-furnished-server.onrender.com/furniture')
        .then(res => res.json())
        .then(data => setFurnitures(data));
    }, []);

    return (
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                furnitures.map((furniture, index)=> <tr key={furniture._id} index={index} furniture={furniture}>
                <td>{index + 1}</td>
                <td><img style={{width:60, height:30}} src={furniture.img} alt="" /></td>
                <td>{furniture.name}</td>
                <td>{furniture.description.slice(0, 40)}....</td>
                <td>{furniture.price}</td>
                <td><button className='btn btn-primary'>delete</button></td>
                </tr> )
            }
           
        </tbody>
    </Table>
    );
};

export default HomeDashboard;