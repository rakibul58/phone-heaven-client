import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const CategoryPhone = ({ phone }) => {
    const { image, price, model, seller, post_date , verified} = phone;
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
                    </div>
                    <div className="card-actions flex-col items-end">
                        <div className="">Posted by <strong>{seller}</strong> {verified && <CheckCircleIcon className='w-5 h-5 inline text-blue-500'></CheckCircleIcon>} </div>
                        <div>At <strong>{post_date}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPhone;