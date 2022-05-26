import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const AllProducts = () => {
    const [products, setProducts] = useProducts([]);
    return (
        <div className="my-28">
            <div className="text-center " >
                <h3 className="text-[#06396C] text-xl font-bold uppercase">All Products</h3>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}>


                    </Product>)
                }

            </div>

        </div>
    );
};

export default AllProducts;