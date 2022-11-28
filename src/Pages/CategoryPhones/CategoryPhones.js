import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyTitle from '../../components/MyTitle/MyTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import useUser from '../../hooks/useUser';
import BookingModal from './BookingModal';
import CategoryPhone from './CategoryPhone';

const CategoryPhones = () => {

    const { id } = useParams();
    console.log(id);
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    const [isUser] = useUser(user?.email);

    const [category, setCategory] = useState({});
    // const [phones, setPhones] = useState([]);
    const [phoneInfo, setPhoneInfo] = useState(null);


    const { data: currentUser = [] } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://mobile-heaven-server.vercel.app/users?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });

    useEffect(() => {
        axios.get(`https://mobile-heaven-server.vercel.app/categories/${id}`)
            .then(res => setCategory(res.data))
    }, [id]);


    const { data: phones = [] , refetch} = useQuery({
        queryKey: ['phones'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://mobile-heaven-server.vercel.app/phones/${id}`);
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });

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
                                phones.map(phone => phone.status==="unsold" && <CategoryPhone
                                    key={phone._id}
                                    phone={phone}
                                    refetch={refetch}
                                    setPhoneInfo={setPhoneInfo}
                                    currentUser={currentUser}
                                ></CategoryPhone>)
                            }
                        </div>
                    </>
            }
            {
                phoneInfo && <BookingModal setPhoneInfo={setPhoneInfo} phoneInfo={phoneInfo} currentUser={currentUser} refetch={refetch}></BookingModal>
            }

        </div>
    );
};

export default CategoryPhones;