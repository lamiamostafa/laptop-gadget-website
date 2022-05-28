import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);

        const url = `http://localhost:5000/addproduct`;
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
                toast('Thanks your data is Added');
            })
    };
    return (
        <div className=" text-center">
            <h2 className="text-2xl my-2">Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full  ">
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs mx-auto mb-2 text-center"
                        placeholder='Adminemail' value={user.email} {...register("email")}
                    />

                </div>
                <div className="form-control w-full  ">

                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs mx-auto my-2 text-center"
                        {...register("name")}
                    />

                </div>

                <div className="form-control w-full ">

                    <input
                        type="number"
                        placeholder="price"
                        className="input input-bordered w-full max-w-xs mx-auto mb-2"
                        {...register("price")}
                    />

                </div>
                <div className="form-control w-full ">

                    <input
                        type="text"
                        placeholder="Product Description"
                        className="input input-bordered w-full max-w-xs mx-auto mb-2"
                        {...register("description")}
                    />

                </div>
                <div className="form-control w-full ">

                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs mx-auto mb-2 "
                        {...register("minimumOrderQuantity")}
                    />

                </div>
                <div className="form-control w-full ">

                    <input
                        type="number"
                        placeholder="Available Order Quantity"
                        className="input input-bordered w-full max-w-xs mx-auto mb-2"
                        {...register("availableOrderQuantity")}
                    />

                </div>



                <div className="form-control w-full ">

                    <input
                        type="text"
                        placeholder="product image url"
                        className="input input-bordered w-full max-w-xs mx-auto mb-2"
                        {...register("img")}
                    />

                </div>

                <input className='btn w-full max-w-xs text-white ' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;