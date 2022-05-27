import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

import usePurchaseDetail from '../../hooks/usePurchaseDetail';

const Purchase = () => {
    const { productId } = useParams();
    const [item, setItem] = usePurchaseDetail(productId);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [user] = useAuthState(auth);
    console.log(user);
    const min = item.minimumOrderQuantity;
    const max = item.availableOrderQuantity;

    const onSubmit = data => {
        // console.log(data);


    }
    const handleQuantity = () => {
        const quantity = getValues("orderQuantity");
        console.log(quantity);


    }

    return (

        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <h1>Name{user.displayName}</h1>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Purchase the order</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input className="input input-bordered w-full max-w-xs " placeholder='Email' value={user.email} {...register("email")} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input className="input input-bordered w-full max-w-xs " placeholder='Name' value={user?.displayName} {...register("name")} />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">ProductName</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs " value={item.name} {...register("minimumOrderQuantity")} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input className="mb-2" placeholder='Address' {...register("address")} />

                        </div>
                        {/* <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Order</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs " value={item.availableOrderQuantity} {...register("availableOrderQuantity")} />

                        </div>  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Order quantity</span>
                            </label>
                            <input onChange={handleQuantity} className="input input-bordered w-full max-w-xs "
                                name="quantity" type="number" placeholder="Order Quantity"
                                {...register("orderQuantity", {
                                    required: {
                                        value: true,
                                        message: 'order is Required'
                                    },



                                })}


                            />

                            {/* <label className="label">
                                {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}
                                {errors.orderQuantity?.type === 'maxlength' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}
                                {errors.orderQuantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}
                            </label> */}

                        </div>


                        <button
                            // disabled={errors.orderQuantity?.type === 'maxLength' || errors.orderQuantity?.type === 'minLength'}
                            className="btn w-full  my-2 text-white" type="submit"  >Purchase Now</button>
                    </form>



                </div>
            </div>
        </div>



    );
};

export default Purchase;