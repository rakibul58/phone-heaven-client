import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [] , refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/sellers`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });

    const handleVerify = (id , email) =>{
        fetch(`http://localhost:5000/sellers/${id}?email=${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Verified the Seller');
                    refetch();
                }
            });
    }

    const handleDeleteSeller = (id , email) =>{
        fetch(`http://localhost:5000/sellers/${id}?email=${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Removed the Seller');
                    refetch();
                }
            });
    }

    return (
        <div className='ml-6 mt-6'>
            <h1 className='text-accent text-opacity-90 text-4xl font-semibold'>All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full mt-5">
                    <thead className='text-accent'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr
                                key={seller._id}
                            >
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td className='text-white'>
                                    <button onClick={()=>handleDeleteSeller(seller._id , seller.email)} className='btn btn-xs btn-error mr-2 hover:bg-opacity-90'>Delete</button>
                                    {!seller?.verified && <button onClick={()=>handleVerify(seller._id , seller.email)} className='btn btn-xs bg-blue-600 mr-2 hover:bg-opacity-90'>Verify</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;