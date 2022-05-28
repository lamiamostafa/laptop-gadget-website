import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

import usePurchaseDetail from '../../hooks/usePurchaseDetail';

const Purchase = () => {
    const { productId } = useParams();
    const [item, setItem] = usePurchaseDetail(productId);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    console.log(user);

    // const [disable, setDisable] = useState(true);



    const onSubmit = data => {
        const url = `https://safe-wildwood-22478.herokuapp.com/order`;
        fetch(url, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

                console.log(result);
                toast('Thanks your order is Added');
            })
        console.log(data);




    }



    return (

        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
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
                            <input className="input input-bordered w-full max-w-xs " placerholder="productname" value={item?.name} {...register("productname")} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input className="mb-2" placeholder='Address' {...register("address")} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Order quantity</span>
                            </label>


                            <input className="input input-bordered w-full max-w-xs "
                                max={item.availableOrderQuantity} min={item.minimumOrderQuantity} name="quantity" type="number" placeholder="Order Quantity"
                                {...register("orderQuantity", {
                                    required: {
                                        value: true,
                                        message: 'order is Required'
                                    },
                                    // min: {
                                    //     value: item.minimumOrderQuantity,
                                    //     message: 'min order is Required'
                                    // },
                                    // max: {
                                    //     value: item.availablerderQuantity,
                                    //     message: ' max order is Required'
                                    // }



                                })}


                            />

                            <label className="label">
                                {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}
                                {/* {errors.orderQuantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}
                                {errors.orderQuantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>} */}

                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Total Price</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs  "  {...register("totalprice")} />

                        </div>



                        <button
                            // onClick={handleData}

                            // disabled={errors.orderQuantity?.type === 'min' || errors.orderQuantity?.type === 'max'}
                            className="btn w-full  my-2 text-white" type="submit"  >Purchase Now</button>
                    </form>



                </div>
            </div>
        </div>



    );

};

export default Purchase;