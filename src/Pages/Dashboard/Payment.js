import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import auth from '../../firebase.init';

const Payment = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="flex justify-center items-center ">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="input my-2 input-bordered w-full max-w-xs" type="text"
                            placeholder="Your payment method" {...register("payment")} />
                        <input className="input my-2 input-bordered w-full max-w-xs" type="text"
                            placeholder="Transaction Id" {...register("transaction")} />
                        <input className="input input-bordered my-2 w-full max-w-xs"
                            type="text"
                            value={user?.displayName}
                            {...register("name")}
                        />


                        <button
                            className="btn w-full  my-2 text-white"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Payment;