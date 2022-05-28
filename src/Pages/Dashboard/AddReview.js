import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {

    const colors = {
        orange: '#FFBA5A',
        grey: '#a9a9a9'
    }
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        stars: {
            display: "flex",
            flexDirection: "row",
        }


    };

    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);

        const url = `http://localhost:5000/review`;
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
                toast('Thanks for Your FeedBack');
            })
    };

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    return (
        <div style={styles.container}>
            <h2 className="my-5"> ADD YOUR REVIEWS </h2>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (


                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
            <div className="flex ">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="input my-2 input-bordered w-full max-w-xs" type="text"
                                placeholder="The Rating is" {...register("ratings")} />
                            <input className="input input-bordered my-2 w-full max-w-xs"
                                placeholder="What's your experience?"
                                type="text"
                                value={user.displayName}
                                {...register("name")}
                            />
                            <input className="input input-bordered my-2 w-full max-w-xs"
                                placeholder="Your Image"
                                type="text"
                                {...register("img")}
                            />

                            <input className="input input-bordered my-2 w-full max-w-xs"
                                placeholder="What's your experience?"
                                type="text"
                                {...register("description")}
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

        </div>



    );
};

export default AddReview;