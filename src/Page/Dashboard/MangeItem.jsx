import React from 'react';
import UseMenu from '../../hook/UseMenu';
import SectionTitle from '../../Commponents/SectionTitle';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AxiosSecuire from '../../hook/AxiosSecuire';
import { FaPenToSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MangeItem = () => {
    const { refetch, menu } = UseMenu()
    const axiosSecure = AxiosSecuire()
    // item update operation 

    // menu item delete 
    const handleDeleteMenuItem = (id) => {
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
                axiosSecure.delete(`/menus/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className=''>
            <SectionTitle heading='Mange items' subHeading="What's is now"></SectionTitle>
            <div className='p-4 mt-4'>

                <h1 className='text-4xl font-semibold my-2'>Total Items:{menu.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-gray-200'>
                            <tr>

                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) => (<tr key={index}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <td className='btn w-14 bg-orange-500 ml-4 text-white mt-4 flex justify-center'>
                                        <Link to={`/dashboard/updateItem/${item._id}`}><FaPenToSquare className='text-xl '></FaPenToSquare></Link>
                                    </td>
                                    <th onClick={() => handleDeleteMenuItem(item._id)}>
                                        <FaTrashAlt className='ml-4 text-red-500'></FaTrashAlt>
                                    </th>
                                </tr>))
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MangeItem;