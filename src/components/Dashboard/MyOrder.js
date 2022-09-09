import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../Firebase/Firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import OrderRow from './OrderRow';

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
                orders.map((order, index)=> <OrderRow key={order._id} index={index} order={order} refetch={refetch}></OrderRow> )
            }
           
        </tbody>
    </Table>
    );
};

export default MyOrder;