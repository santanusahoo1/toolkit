import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProducts } from '../services';

export const GetProducts = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.data);
    const status = useSelector((state) => state.product.status);


    useEffect(() => {
        const getProductList = () => {
            dispatch(GetAllProducts());
        }
        getProductList();
    }, [dispatch]);

    return {
        products, status
    }
}