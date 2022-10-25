import React from 'react';
import { useDispatch } from 'react-redux';
import { GetProducts } from '../hooks/getProducts';
import { add } from '../store/cartSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const handleAdd = (product) => {
        dispatch(add(product));
    };

    const { products, status } = GetProducts();

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <div className="productsWrapper">
            {products.map((product, index) => (
                <div className="card" key={index}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;