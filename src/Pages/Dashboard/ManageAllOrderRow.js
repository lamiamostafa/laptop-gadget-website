import React from 'react';



const ManageAllOrderRow = ({ order, index }) => {


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productname}</td>
            <td>{order.name}</td>
            <td>{order.orderQuantity}</td>
            <td>{order.totalprice}</td>
            <td>{order.address}</td>
            <td>

                <td> <button class="btn btn-xs">Pending</button></td>
            </td>
        </tr>
    );
};

export default ManageAllOrderRow;