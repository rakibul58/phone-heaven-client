import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MyTitle from '../../components/MyTitle/MyTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import useUser from '../../hooks/useUser';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    const [isUser] = useUser(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <MyTitle>Dashboard</MyTitle>
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
                            isUser && <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard'>Profile</Link></li>
                        }
                        {
                            isSeller && <>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard'>Profile</Link></li>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/addphone'>Add Phone</Link></li>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/myphones'>My Phones</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard'>Profile</Link></li>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;