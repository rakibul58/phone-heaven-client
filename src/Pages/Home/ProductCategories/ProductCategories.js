import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from './Category';

const ProductCategories = () => {
    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
        .then(res=>setCategories(res.data))
    },[]);
    return (
        <div className='text-center mt-20'>
            <h4 className='font-bold text-xl text-accent'>Categories</h4>
            <h1 className='font-semibold text-3xl mt-3'>See All Second Hand Mobile Categories</h1>
            <div className='mt-12 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.map(category => <Category
                    key={category._id}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;