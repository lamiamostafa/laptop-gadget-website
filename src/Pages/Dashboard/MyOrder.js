import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteOrderConfirm from './DeleteOrderConfirm';
import MyOrderRow from './MyOrderRow';


const MyOrder = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://safe-wildwood-22478.herokuapp.com/myorder?email=${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl my-2">Total Order: {orders.length}</h2>
            <div class="overflow-x-auto table-responsive">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Name</th>
                            <th>Order Quantity</th>
                            <th>Total Price</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <MyOrderRow
                                key={order._key}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            ></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteOrderConfirm
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DeleteOrderConfirm>}
        </div>
    );
};

export default MyOrder;