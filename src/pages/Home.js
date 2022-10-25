import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome to the Redux toolkit store</h2>
            <h3>Products</h3>
            <Products />
        </div>
    );
};

export default Home;
