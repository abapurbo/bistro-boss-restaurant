import React from 'react';
import UseCart from '../../hook/UseCart';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import AxiosSecuire from '../../hook/AxiosSecuire';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = UseCart()
    const axiosSecure = AxiosSecuire()
    const handelDeleteCart = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your cart has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });


    }

    return (
        <div className='p-8'>
            <div className='flex justify-around my-8'>
                <h1 className='text-4xl'>Item:{cart.length}</h1>
                <h1 className='text-4xl'>
                    Total Price:${cart.reduce((accumulator, currentValue) => (
                        accumulator + currentValue.price
                    ), 0)}</h1>
                {
                    cart.length ? <Link to='/dashboard/payment'>
                        <button className='btn btn-primary text-xl'>PAY</button>
                    </Link> : <button disabled className='btn btn-primary text-xl'>PAY</button>
                }

            </div>
            <div>
                <table className="table ">
                    {/* head */}
                    <thead className='bg-gray-200 '>
                        <tr>

                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.image} alt="cart image" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td onClick={() => handelDeleteCart(item._id)}><FaTrashAlt className='text-red-500'></FaTrashAlt></td>
                                </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;