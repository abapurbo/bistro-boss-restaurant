import React from 'react';
import AxiosSecuire from './AxiosSecuire';
import { useQuery } from '@tanstack/react-query';
import AuthUse from '../ShardHook/AuthUse';

const UseCart = () => {
    const axiosSecruire = AxiosSecuire()
    const {user,loading}=AuthUse()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecruire.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default UseCart;