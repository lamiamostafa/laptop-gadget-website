import React from 'react';
import { useNavigate } from 'react-router-dom';


const MyOrderRow = ({ order, index, setDeletingOrder }) => {
    const navigate = useNavigate();
    const navigateToPayment = () => {
        navigate('/payment');

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productname}</td>
            <td>{order.name}</td>
            <td>{order.orderQuantity}</td>
            <td>{order.totalprice}</td>
            <td>{order.address}</td>

            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                <td><button onClick={() => navigateToPayment()} class="btn btn-xs">payment</button></td>
            </td>
        </tr>
    );
};

export default MyOrderRow;