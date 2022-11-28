import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const { id } = useParams();
    const { data: booking = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://mobile-heaven-server.vercel.app/bookings/${id}`);
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });

    const { model, price } = booking;

    console.log(booking);
    return (
        <div className='card shadow-2xl bg-base-300'>
            <div className='card-body'>
                <h2 className='text-3xl text-accent'>Payment</h2>
                <p className='text-xl mt-4 font-bold'>{model}</p>
                <p className='text-lg'>Price: <strong>{price}</strong> Taka</p>
                <div className='w-96 mt-12'>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            booking={booking}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;