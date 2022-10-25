import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd } from '../components/Products';

const ProductCart = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getCartList
    }, []);

    const getCartList = () => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", handleAdd);
        // dispatch(add(product))
    }


    return (
        <div>

        </div>
    );
}

export default ProductCart;
