import React, { useContext } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useUser from '../../hooks/useUser';

const CategoryPhone = ({ phone, setPhoneInfo, refetch , currentUser}) => {
    const { image, price, model, seller, post_date, original_price, used_for, location, verified, reported } = phone;
    const { user } = useContext(AuthContext);
    const [isUser] = useUser(user?.email);


    const handleClick = () => {
        toast.error("Your Have to have a Buyer Account to Book a Phone");
    }
    const handleReport = () => {
        toast.error("Your Have to have a Buyer Account to Report");
    }

    const handleAddToReport = (id) => {

        
        fetch(`https://mobile-heaven-server.vercel.app/reports/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`${phone.model} Reported Successfully`);
                refetch();
            });
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
                        <div>Posted at <strong>{post_date}</strong></div>
                        {
                            isUser ? <div>
                                <label onClick={() => setPhoneInfo(phone)} htmlFor="booking-modal" className="btn btn-sm btn-outline text-white hover:bg-white mr-2">Book Now</label>
                                {!reported && <button onClick={() => handleAddToReport(phone._id)} className="btn btn-sm btn-error hover:bg-opacity-90">Report</button>}
                            </div>
                                :
                                <div>
                                    <button onClick={handleClick} className="btn btn-sm btn-outline text-white hover:bg-white mr-2">Book Now</button>
                                    <button onClick={handleReport} className="btn btn-sm btn-error hover:bg-opacity-90">Report</button>
                                </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryPhone;