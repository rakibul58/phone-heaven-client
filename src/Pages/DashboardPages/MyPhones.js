import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyPhones = () => {
    const { user } = useContext(AuthContext);

    const { data: phones = [], refetch } = useQuery({
        queryKey: ['phones'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://mobile-heaven-server.vercel.app/phones?email=${user?.email}`, {
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

    const handleAdvertise = id => {
        fetch(`https://mobile-heaven-server.vercel.app/phones/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Added to the Advertisement');
                    refetch();
                }
            });
    }

    const handleDeletePhone = id => {
        fetch(`https://mobile-heaven-server.vercel.app/phones/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Deleted the Phone');
                    refetch();
                }
            });
    }

    return (
        <div className='mt-6 ml-6'>
            <h1 className='text-accent text-3xl font-semibold'>My Phones</h1>
            <div className="overflow-x-auto w-full mt-5">
                {phones.length === 0 && <p className='text-2xl'>You Don't Have Any Phones, Please <Link className='link link-accent no-underline' to='/dashboard/addphone'>Add a Phone</Link></p>}
                {phones.length > 0 && <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Phone</th>
                            <th>Price (Taka)</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            phones.map((phone, i) => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={phone.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{phone.model}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {phone.price}
                                </td>
                                <td className='font-bold uppercase'>{phone?.status === "sold" ? <p className='text-success'>Sold</p> : <p className='text-blue-400'>{phone?.status}</p>}</td>
                                <td>
                                    
                                        <button onClick={() => handleDeletePhone(phone._id)} className="btn btn-error hover:bg-opacity-90 btn-xs mr-3 font-bold">Delete</button>
                                    {
                                        !phone?.advertised &&
                                        phone?.status === "unsold" &&
                                        <button onClick={() => handleAdvertise(phone._id)} className="btn btn-warning hover:bg-opacity-90 btn-xs font-bold"
                                        >Advertise</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>}
            </div>
        </div>
    );
};

export default MyPhones;