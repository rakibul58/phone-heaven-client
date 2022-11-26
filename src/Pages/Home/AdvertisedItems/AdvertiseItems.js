import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertiseItems = ({ advertisedPhones }) => {
    return (
        <div className='mt-20 text-center'>
            <h4 className='font-bold text-xl text-accent'>Advertised Items</h4>
            <h1 className='font-semibold text-3xl mt-3'>These are Our Advertised Items</h1>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-10'>
                {
                    advertisedPhones.map(phone => <AdvertisedItem
                    key={phone._id}
                    phone={phone}
                    ></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;