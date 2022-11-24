import React from 'react';

const MyButton = ({children}) => {
    return (
        <button
        className='btn bg-gradient-to-r from-secondary to-primary text-white hover:text-opacity-80'
        >
            {children}
        </button>
    );
};

export default MyButton;