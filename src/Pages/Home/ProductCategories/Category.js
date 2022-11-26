import React from 'react';
import { Link } from 'react-router-dom';


const Category = ({category}) => {
    return (
        <div className="card bg-base-100 shadow-2xl image-full">
            <figure><img src={category.img} style={{height: '225px'}} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-accent text-3xl">{category.category_name}</h2>
                <div className="card-actions justify-end mt-20">
                    <Link to={`/category/${category._id}`} className='btn btn-outline text-white font-bold'>View Phones</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;