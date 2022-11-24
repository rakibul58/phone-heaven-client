import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/login/undraw_secure_login_pdn4.svg';


const Register = () => {
    return (
        <div className='px-3 md:px-10'>
            <div className="my-20">
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <div className="text-center lg:pr-40 mb-5">
                        <img src={img} alt="" />
                    </div>
                    <form className="card h-1/2 py-8 w-full lg:w-1/3 shadow-2xl bg-base-300">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-6 text-accent">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select className="select select-bordered w-full">
                                    <option disabled selected>Select Your Role</option>
                                    <option>Seller</option>
                                    <option>User</option>
                                </select>
                            </div>
                            <div className="form-control mt-3">
                                <p>Already Have an Account? <strong><Link className='text-accent' to='/login'>Login</Link></strong></p>
                            </div>
                            <input className='btn bg-gradient-to-r from-accent to-secondary mt-5 text-white hover:text-opacity-50 font-bold' type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;