import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import MyButton from '../../components/MyButton/MyButton';
import { AuthContext } from '../../contexts/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { data: currentUser = [] } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/users?email=${user?.email}`, {
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

    // console.log(currentUser);
    return (
        <div className='ml-5 mt-6'>
            <h2 className='text-3xl'>Welcome <span className='text-accent'>{currentUser.name}</span></h2>
            <h4 className='text-lg mt-3'>Email: {currentUser.email}</h4>
            <h4 className='text-lg mt-3 mb-6'>Role: <span className='uppercase'>{currentUser.role}</span></h4>
            <MyButton>Edit Profile</MyButton>
        </div>
    );
};

export default Profile;