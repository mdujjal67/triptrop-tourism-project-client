import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import UseAuth from "./UseAuth";
import logo from "../assets/travel-logo.png"
import "../App.css"
import { Tooltip } from 'react-tooltip'


const Navbar = () => {
    const { user, logOut } = UseAuth()
    const [showUserName, setShowUserName] = useState(false);
    const handleSignOut = () => {
        logOut()
            .then()
            .cache()
    }
    console.log(user)
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 flex flex-col md:flex-row lg:flex-row">
                <div className="navbar-start mr-44 lg:mr-auto md:mr-auto z-10">
                    <div className="dropdown">
                        <Link>
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                <h2 className="work-sans font-semibold">TripTrove</h2>
                            </div>
                        </Link>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl" to='/'>Home</Link>

                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl my-2" to='/allTouristsSpot'>All Tourists Spot</Link>

                            {
                                user && (<Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl mb-2" to='/addTouristsSpot'>Add Tourists Spot</Link>)
                            }

                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl mb-2" to='/myList'>My List</Link>

                            {/* {
                                user && (<Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl mb-2" to='/userProfile'>User Profile</Link>)
                            } */}
                        </ul>
                    </div>
                    <Link to='/' className="text-[18px] md:text-lg lg:text-xl">
                        {/* this line is for tool tip */}
                        {/* <a data-tooltip-id="my-tooltip" data-tooltip-content="Tourism Management"></a> */}
                        <div className="flex items-center gap-2">
                            <img className="w-16" src={logo} alt="" />
                            <h2 className="work-sans font-semibold">TripTrove</h2>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item mr-4' : 'menu-item text-[#131313CC] mr-3 color'} to='/'>Home</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item' : 'menu-item text-[#131313CC]'} to='/allTouristsSpot'>All Tourists Spot</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item ml-4' : 'menu-item text-[#131313CC] ml-3'} to='/addTouristsSpot'>Add Tourists Spot</NavLink>

                        {/* protected route: After login the menu item will appear */}
                        {
                            user && (<NavLink className={({ isActive }) => isActive ? 'isActive menu-item ml-4' : 'menu-item text-[#131313CC] ml-3'} to='/myList'>My List</NavLink>)
                        }
                    </ul>
                </div>


                {/* navbar end section */}
                <div className="navbar-end flex ml-28 lg:ml-auto -mt-4 md:-mt-auto lg:-mt-auto">
                    {user ?
                        <NavLink to='/login'>
                            <div
                                className="dropdown dropdown-end flex items-center"
                                onMouseEnter={() => setShowUserName(true)}
                                onMouseLeave={() => setShowUserName(false)}
                            >
                                {/* for avatar name */}
                                {showUserName && <h2 className="pr-2 Montserrat text-[12px] lg:text-[14px]">
                                    {user?.displayName || 'User'}</h2>}

                                {/* for avatar image */}
                                {user && !showUserName && (
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img referrerPolicy="no-referrer" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="user" />
                                        </div>
                                    </label>
                                )}

                            </div>
                        </NavLink>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm btn-ghost hover:bg-violet-600 hover:text-white">Login</button>
                        </Link>

                    }
                    <button onClick={handleSignOut} className="btn btn-sm btn-ghost hover:bg-violet-600 lg:ml-2 hover:text-white">Log Out</button>

                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;