import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyPhones = () => {
    const { user } = useContext(AuthContext);

    const { data: phones = [] } = useQuery({
        queryKey: ['phones'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/phones?email=${user?.email}`, {
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

    console.log(phones);

    return (
        <div className='mt-6 ml-6'>
            <h1 className='text-accent text-3xl font-semibold'>My Phones</h1>
            <div className="overflow-x-auto w-full mt-5">
                {phones.length === 0 && <p className='text-2xl'>You Don't Have Any Phones, Please <Link className='link link-accent no-underline' to='/dashboard/addphone'>Add a Phone</Link></p> }
                {phones.length > 0 && <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Phone</th>
                            <th>Price</th>
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
                                <td>{phone?.status ? <p>Sold</p> : <p>Unsold</p>}</td>
                                <td>
                                    <button className="btn btn-error hover:bg-opacity-90 btn-xs mr-3 font-bold">Delete</button>
                                    {
                                        !phone?.status && <button className="btn btn-warning hover:bg-opacity-90 btn-xs font-bold">Advertise</button>
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