import React from 'react';

const ManageProductRow = ({ product, index, setDeletingProduct }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={product.img} alt="image" />
                </div>
            </div></td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.minimumOrderQuantity}</td>
            <td>{product.availableOrderQuantity}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ManageProductRow;