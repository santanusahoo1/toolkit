import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = "https://fakestoreapi.com";

export const GetAllProducts = createAsyncThunk(
    "products/fetch",
    async () => await await (await axios.get(`${BASE_URL}/products`)).data
)