import React from 'react';

const Mission = ({ mission }) => {
    return (
        <div className="card lg:max-w-lg  bg-[#06396C]  ">
            <div className="avatar">
                <div className="w-28 mx-auto my-2 rounded-full ring ring-[#06396C] ring-offset-base-100 ">
                    <img src={mission.img} alt="summary" />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title   text-white font-bold">{mission.desc}</h2>

            </div>
        </div>
    );
};

export default Mission;