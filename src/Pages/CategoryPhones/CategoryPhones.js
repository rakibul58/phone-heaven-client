import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import MyTitle from '../../components/MyTitle/MyTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import useUser from '../../hooks/useUser';
import CategoryPhone from './CategoryPhone';

const CategoryPhones = () => {

    const { id } = useParams();
    console.log(id);
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    const [isUser] = useUser(user?.email);

    const [category, setCategory] = useState({});
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/categories/${id}`)
            .then(res => setCategory(res.data))
    }, [id]);

    useEffect(() => {
        axios.get(`http://localhost:5000/phones/${id}`)
            .then(res => setPhones(res.data))
    }, [id]);

    // console.log(category);

    return (
        <div className='mt-12'>
            <MyTitle>Category</MyTitle>
            {
                (!isAdmin && !isSeller && !isUser) ? <>
                    <h1 className='font-bold text-error text-3xl mb-64 text-center'>Your Account Has Been Deleted</h1>
                </>
                    : <>
                        <div className='text-center'>
                            <h4 className='text-xl font-bold text-accent'>{category.category_name}</h4>
                            <h2 className='text-3xl font-semibold'>These Are the Mobiles Under the Category of {category.category_name}</h2>
                        </div>
                        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-12 mb-24'>
                            {
                                phones.map(phone => <CategoryPhone
                                    key={phone._id}
                                    phone={phone}
                                ></CategoryPhone>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default CategoryPhones;