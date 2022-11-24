import React from 'react';
import MyButton from '../../../components/MyButton/MyButton';

const Category = ({category}) => {
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={category.img} style={{height: '225px'}} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-info text-3xl">{category.category_name}</h2>
                <div className="card-actions justify-end mt-20">
                    <MyButton>View Phones</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Category;