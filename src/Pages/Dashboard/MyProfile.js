import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);

        const url = `https://safe-wildwood-22478.herokuapp.com/myprofile`;
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
                toast('Thanks your information is Added');
            })
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">MY PROFILE</h2>
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
                            <input className="input input-bordered w-full max-w-xs " placeholder='Educational Qualification' value={user?.displayName} {...register("name")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Education</span>

                            </label>
                            <input className="input input-bordered w-full max-w-xs " placeholder='Educational Qualification'  {...register("qualification")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>

                            </label>
                            <input className="input input-bordered w-full max-w-xs " placeholder='Location' {...register("location")} />
                        </div>



                        <button
                            className="btn w-full  my-2 text-white" type="submit"  >UPDATE</button>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default MyProfile;