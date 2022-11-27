import React, { useContext } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/useSeller';
import useAdmin from '../../hooks/useAdmin';

const CategoryPhone = ({ phone }) => {
    const { image, price, model, seller, post_date , verified , original_price , used_for , location} = phone;
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);

    const handleClick = () =>{
        if(isAdmin || isSeller){
            toast.error("Your Have to have a Buyer Account to Book a Phone");
            return;
        }

        toast.success("Phone Booked Successfully");
    }

    return (
        <div>
            <div className="card bg-secondary bg-opacity-5 shadow-2xl pt-6">
                <figure><img className='rounded-xl' style={{ height: '200px' }} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">
                        {model}
                    </h2>
                    <div className="card-actions flex-col justify-start">
                        <h1 className='text-lg text-white'>Price: <strong>{price} Taka</strong></h1>
                        <h1 className='text-sm text-white'>Original Price: <strong>{original_price} Taka</strong></h1>
                        <h1 className='text-sm text-white'>Used For: <strong>{used_for}</strong></h1>
                        <h1 className='text-sm text-white'>Location: <strong>{location}</strong></h1>
                    </div>
                    <div className="card-actions flex-col items-end">
                        <div className="">Posted by <strong>{seller}</strong> {verified && <CheckCircleIcon className='w-5 h-5 inline text-blue-500'></CheckCircleIcon>} </div>
                        <div>At <strong>{post_date}</strong></div>
                        <button className='btn btn-outline text-white hover:bg-white' onClick={handleClick}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPhone;