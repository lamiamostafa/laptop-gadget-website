import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white w-48 font-bold bg-[#06396C] ">{children}</button>

        </div>
    );
};

export default PrimaryButton;