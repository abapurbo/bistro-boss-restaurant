import React from 'react';
import AxiosSecuire from '../../hook/AxiosSecuire';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = AxiosSecuire()
    const {refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }

    })
    // update admin user
    const handleMakeAdmin = user => {
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

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Admin!",
                                text: `Your ${user.name} has been admin.`,
                                icon: "success"
                            });
                        }
                      refetch()
                    })
            }
        })
    }

    // delete user in database
    const handleDeleteUser = id => {
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

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });

    }
    return (
        <div className='px-8 '>

            <div className="flex justify-between my-4 font-semibold">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users:{users.length}</h2>
            </div>
            {/*All users table */}
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-gray-100 text-[19px]'>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-[17px]'>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {
                                      user.role==='admin'?<td className='font-semibold'>Admin</td>:<td onClick={() => handleMakeAdmin(user)} className='text-xl btn m-4 text-white bg-orange-400'><FaUsers></FaUsers></td>
                                 
                                }
                                <td onClick={() => handleDeleteUser(user._id)} className='text-red-600 '><FaTrashAlt className='ml-4'></FaTrashAlt></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;