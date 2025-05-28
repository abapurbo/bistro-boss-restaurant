import React from 'react';
import SectionTitle from '../../Commponents/SectionTitle';
import AuthUse from '../../ShardHook/AuthUse';
import { useQuery } from '@tanstack/react-query';
import AxiosSecuire from '../../hook/AxiosSecuire';

const PaymentHistory = () => {
    const { user } = AuthUse()
    const axiosSecure = AxiosSecuire()
    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['history'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    console.log(paymentHistory)
    return (
        <div className='m-4 space-y-5'>
            <SectionTitle heading='Payment history' subHeading='At a Glance!'></SectionTitle>
               <h1 className='text-3xl mt-7 font-semibold'>Total:{paymentHistory.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
             
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Total Price</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map(history => <tr key={history._id}>
                                <th>{history.email}</th>
                                <td>Food order</td>
                                <td>{history.price}</td>
                                <td>{history.date}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;