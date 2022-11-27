import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {

    const { data: reports = [] , refetch} = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/reports`, {
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

    const handleDeleteSeller = (id) =>{
        fetch(`http://localhost:5000/reports/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Removed the Reported Product');
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
                            <th>Seller</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map((report, i) => <tr
                                key={report._id}
                            >
                                <th>{i + 1}</th>
                                <td>{report.model}</td>
                                <td>{report.seller}</td>
                                <td><button onClick={()=>handleDeleteSeller(report._id)} className='btn btn-xs btn-error hover:bg-opacity-80'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;