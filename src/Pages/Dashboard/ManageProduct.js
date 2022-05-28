import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useProducts from '../../hooks/useProducts';
import Product from '../Home/Product';
import Loading from '../Shared/Loading';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product')
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <h2 className="text-2xl my-2">Total Product: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Minimum</th>
                            <th>Available</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductRow
                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            ></ManageProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirmationModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmationModal>}
        </div>
    );
};

export default ManageProduct;