import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner/swap.png';

const Banner = () => {
    return (
        <section className='mb-44'>
            <div className="bg-gradient-to-r from-primary via-secondary to-accent flex lg:flex-row flex-col items-center lg:pr-32 lg:pb-0 pb-16">
                <div className="container flex flex-col px-4 py-16 pb-24 mx-auto text-center lg:text-left md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">Welcome to <span className='text-info'>Phone<br />Heaven</span></h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Phone Heaven is one of the largest reselling phone website in the world. Be fast to claim your dream phone today.</p>
                    <div className="flex flex-wrap justify-center lg:justify-start">
                        <Link to="/register" type="button" className="w-40 text-center hover:bg-opacity-90 px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900">Register</Link>
                        <Link to="/login" type="button" className="w-40 text-center hover:bg-base-100 hover:bg-opacity-10 font-semibold px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50">Login</Link>
                    </div>
                </div>
                <div className='md:w-1/2 w-full'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;