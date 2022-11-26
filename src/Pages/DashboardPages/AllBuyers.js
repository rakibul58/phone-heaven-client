import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/buyers`, {
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
                                <th>{i+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;