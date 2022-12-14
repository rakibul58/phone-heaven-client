import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/navbar/no_image-removebg-preview.png';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // console.log(isSeller);

    const handleLogOut = () => {
        logOut()
            .then(res => { })
            .catch(error => console.error(error));
    }

    const navElements = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            !user ? <>
                <li><Link to='/login'>Login</Link></li>
            </>
                : <>
                    {
                        user?.uid && <li><Link to='/dashboard'>Dashboard</Link></li>
                    }
                    <li><button onClick={handleLogOut} className='btn btn-accent btn-outline rounded-lg'>Logout</button></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-accent text-xl">
                        {navElements}
                    </ul>
                </div>
                <img className='w-[80px] mr-[-45px]' src={img} alt="" />
                <Link className="btn btn-ghost normal-case text-xl sm:text-3xl bg-clip-text bg-gradient-to-r from-accent to-secondary text-transparent font-extrabold">Phone Heaven</Link>
            </div>
            <div className="navbar-end hidden lg:flex font-semibold text-accent text-xl">
                <ul className="menu menu-horizontal p-0">
                    {navElements}
                </ul>
            </div>
            <label htmlFor="dashboard" tabIndex={2} className="btn btn-ghost lg:hidden ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;