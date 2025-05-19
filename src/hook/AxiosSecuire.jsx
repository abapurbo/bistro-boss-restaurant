import axios from 'axios';
import React from 'react';

const axiosCreate=axios.create({
    baseURL:'http://localhost:5000'
})
const AxiosSecuire = () => {
   return axiosCreate
};

export default AxiosSecuire;