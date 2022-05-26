import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.img} alt="products" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-title"><small>{product.description}</small></p>
                <p className="card-desc">Price:{product.price}</p>
                <p className="card-desc">MinimumQuantity:{product.minimumOrderQuantity}</p>
                <p className="card-desc">AvailableQuantity:{product.availableOrderQuantity}</p>

                <button onClick={() => navigateToPurchase(product._id)} className='btn btn-primary uppercase text-white font-bold bg-[#06396C] '> Buy Now</button>
            </div>
        </div>
    );
};

export default Product;