import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyBookings = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
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

    console.log(bookings);

    return (

        <div className='ml-6 mt-6'>
            {
                bookings.length === 0 ? <p className='text-3xl text-error'>You Don't Have Any Bookings. Please Book a phone</p> :
                    <>
                        <h1 className='text-accent text-opacity-90 text-4xl font-semibold'>My Bookings</h1>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full mt-5">
                                <thead className='text-accent'>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price (Taka)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        bookings.map((booking, i) => <tr
                                            key={booking._id}
                                        >
                                            <th>{i + 1}</th>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{booking.model}</div>
                                                </div>
                                            </div>
                                            <td>{booking.price}</td>
                                            <td>
                                                {
                                                    booking.price && !booking.paid && <Link
                                                        to={`/dashboard/payment/${booking._id}`}>
                                                        <button
                                                            className='btn btn-xs px-7 font-bold bg-blue-600 hover:bg-opacity-95'
                                                        >Pay</button>
                                                    </Link>
                                                }
                                                {
                                                    booking.price && booking.paid && <div
                                                        className='btn btn-xs font-bold px-7 btn-success' 
                                                    >Paid</div>
                                                }
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyBookings;