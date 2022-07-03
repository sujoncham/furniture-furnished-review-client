import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const MyOrder = () => {
    const [user] = useAuthState(auth);
   
    const {data:orders, isLoading, refetch} = useQuery('orders', () => fetch(`https://sleepy-thicket-05560.herokuapp.com/order?order=${user?.email}`, {
        method: 'GET',
        headers:{
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`,
        }
    })
    .then(res => res.json()) )

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }


    const deleteOrder = (id) =>{
        const confirmDelete = window.confirm("Are you sure to delete this product!!!");
        if(confirmDelete){
            fetch(`https://sleepy-thicket-05560.herokuapp.com/order/${id}`, {
                method: 'DELETE',
                headers:{
                    'content-type' : 'application/json',
                },
            })
            .then(res => res.json())
            .then(data =>{
                toast('Order deleted successfully', data);
            });
        }
        refetch();
    }

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
                orders.map((order, index)=> <tr key={order._id} index={index} order={order}>
                <td>{index + 1}</td>
                <td><img style={{width:60, height:30}} src={order.img} alt="" /></td>
                <td>{order.name}</td>
                {/* <td>{order.description.slice(0, 40)}....</td> */}
                <td>{order.price}</td>
                <td><button className='btn btn-primary'>Pay</button></td>
                <td><button onClick={()=>deleteOrder(order._id)} className='btn btn-primary'>delete</button></td>
                </tr> )
            }
           
        </tbody>
    </Table>
    );
};

export default MyOrder;