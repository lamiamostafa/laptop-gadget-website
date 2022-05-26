import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import Loading from '../Shared/Loading';

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setProducts(data)
            });

    }, [])
    return (
        <div className="my-28">
            <div className="text-center " >
                <h3 className="text-[#06396C] text-xl font-bold uppercase">Our Products</h3>
                <h2 classname="text-4xl">Products We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {isLoading && <Loading></Loading>}
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}>


                    </Product>)
                }
                <Link className="btn btn-primary uppercase text-white font-bold bg-[#06396C]  justify-items-end" to="/allproducts">Show More</Link>
            </div>

        </div>
    );
};

export default Products;