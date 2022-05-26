import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tool.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tool.name}</h2>
                <p className="card-title">{tool.description}</p>
                <p className="card-title">{tool.minimumOrderQuantity}</p>
                <p className="card-title">{tool.availableOrderQuantity}</p>
                <p className="card-title">{tool.price}</p>
                {/* <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary updateButton button'> Stock Update</button> */}
                <button className='btn btn-primary uppercase text-white font-bold bg-[#06396C] '> Buy Now</button>
            </div>
        </div>
    );
};

export default Tool;