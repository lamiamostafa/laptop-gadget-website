import React from 'react';


const MyOrderRow = ({ order, index, setDeletingOrder }) => {


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>{order.totalprice}</td>
            <td>{order.orderQuantity}</td>
            <td>{order.address}</td>
            <td>{order.productname}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default MyOrderRow;