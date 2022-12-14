import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const AdvertisedItem = ({phone}) => {
    const { image , model , price , seller , verified} = phone;
    return (
        <div>
            <div className="card bg-secondary bg-opacity-5 shadow-2xl pt-6">
                <figure><img className='rounded-xl' style={{height:'200px'}} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">
                        {model}
                        <div className="badge badge-outline badge-info">NEW</div>
                    </h2>
                    <div className="card-actions flex-col justify-start">
                        <h1 className='text-lg text-white'>Price: <strong>{price} Taka</strong></h1>
                        <div className="">Posted by <strong>{seller}</strong> {verified && <CheckCircleIcon className='w-5 h-5 inline text-blue-500'></CheckCircleIcon>} </div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Advertised</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;