import React from 'react';

const SummaryContain = ({ summary }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="avatar">
                <div className="w-28 mx-auto my-2 rounded-full ring ring-[#06396C] ring-offset-base-100 ">
                    <img src={summary.img} alt="summary" />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-[#06396C] font-bold">{summary.number}</h2>
                <p className="card-desc  text-2xl uppercase text-[#06396C]"><small>{summary.desc}</small></p>

            </div>
        </div>
    );
};

export default SummaryContain;