import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({order, index, refetch}) => {
    const {_id, name, img, price} = order;


    const deleteOrder = (id) =>{
        const confirmDelete = window.confirm("Are you sure to delete this product!!!");
        if(confirmDelete){
            fetch(`https://furniture-furnished-server.onrender.com/order/${id}`, {
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
        <tr>
            <td>{index + 1}</td>
            <td><img style={{width:60, height:30}} src={img} alt="" /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td><button className='btn btn-primary'>Pay</button></td>
            <td><button onClick={()=>deleteOrder(_id)} className='btn btn-primary'>delete</button></td>
        </tr>
    );
};

export default OrderRow;