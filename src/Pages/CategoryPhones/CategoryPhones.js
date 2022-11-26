import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryPhones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h1>This are your category</h1>
            <div>
                {
                    phones.map(phone => <p>{phone.model}</p> )
                }
            </div>
        </div>
    );
};

export default CategoryPhones;