import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/login/undraw_secure_login_pdn4.svg';
import google from '../../assets/login/google.png';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { logIn, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                setError("");
                form.reset();
            })
            .catch(error => setError(error.message));
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setError("");
                const newUser = {
                    name: user?.displayName,
                    email: user?.email,
                    isSeller: "false"
                }
                addUser(newUser);
            })
            .catch(error => setError(error.message));
    }

    const addUser = newUser => {
        // console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("You Have Registered Successfully");
                    setError("");
                }
            });
    }

    return (
        <div className='px-3 md:px-10'>
            <div className="my-20">
                <div className="flex flex-col items-center lg:flex-row gap-5">
                    <div className="text-center lg:pr-40 mb-5">
                        <img src={img} alt="" />
                    </div>
                    <form onSubmit={handleSubmit} className="card w-full lg:w-1/3 shadow-2xl bg-base-300 py-6">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-6 text-accent">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-3">
                                <p>Do not Have an Account? <strong><Link className='text-accent' to='/register'>Register</Link></strong></p>
                                {
                                    error && <p className='text-error text-sm mt-3'>{error}</p>
                                }
                            </div>
                            <input className='btn bg-gradient-to-r from-accent to-secondary mt-5 text-white hover:text-opacity-50 font-bold' type="submit" value="Login" />
                        </div>
                        <div className="divider px-8">Or</div>
                        <div className='flex justify-center px-8 mb-8'>
                            <button onClick={handleGoogleLogin} className='btn w-full flex items-center gap-3 bg-gradient-to-r from-blue-50 font-bold to-blue-200 mt-5 text-primary hover:text-opacity-50'><img src={google} alt="" /> Join With Google</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;