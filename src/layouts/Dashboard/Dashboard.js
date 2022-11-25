import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-accent text-xl font-bold gap-3">

                        {/* <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard'>My Profile</Link></li> */}
                        {
                            isSeller && <>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/addphone'>Add Phone</Link></li>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/myphones'>My Phones</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/addphone'>All Buyers</Link></li>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/myphones'>All Sellers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;