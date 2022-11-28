import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [] , refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://mobile-heaven-server.vercel.app/buyers`, {
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

    const handleDeleteBuyer = (id) => {
        fetch(`https://mobile-heaven-server.vercel.app/buyers/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Removed the Buyer');
                    refetch();
                }
            });
    }

    return (
        <div className='ml-6 mt-6'>
            <h1 className='text-accent text-opacity-90 text-4xl font-semibold'>All Buyers</h1>
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
                            buyers.map((buyer, i) => <tr
                                key={buyer._id}
                            >
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={()=>handleDeleteBuyer(buyer._id , buyer.email)} className='btn btn-xs btn-error mr-2 hover:bg-opacity-90'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;