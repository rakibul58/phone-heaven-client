import React from 'react';

const MyButton = ({children}) => {
    return (
        <button
        className='btn btn-info btn-outline'
        >
            {children}
        </button>
    );
};

export default MyButton;