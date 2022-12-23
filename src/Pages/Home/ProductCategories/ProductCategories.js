import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Category from './Category';

const ProductCategories = () => {
    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        axios.get('https://mobile-heaven-server.vercel.app/categories')
        .then(res=>setCategories(res.data))
    },[]);

    const navigation = useNavigation();

    if(navigation.state === 'loading'){
        return <div className="w-28 h-28 mx-auto mt-32 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
    }

    return (
        <div className='text-center mt-20 mb-44'>
            <h4 className='font-bold text-xl text-accent'>Categories</h4>
            <h1 className='font-semibold text-3xl mt-3'>See All Second Hand Mobile Categories</h1>
            <div id='categories' className='mt-12 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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