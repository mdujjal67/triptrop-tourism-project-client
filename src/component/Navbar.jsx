import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";
import logo from "../assets/travel-logo.png"
import "../App.css"
import { Tooltip } from 'react-tooltip'
import { Zoom } from "react-awesome-reveal";


const Navbar = () => {
    const { user, logOut } = UseAuth()
    const [showUserName, setShowUserName] = useState(false);
    const handleSignOut = () => {
        logOut()
            .then()
            .cache()
    }
    console.log(user);

    // theme toggle
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 flex flex-col md:flex-row lg:flex-row">
                <div className="navbar-start mr-44 lg:mr-auto md:mr-auto z-10">
                    <div className="dropdown">
                        <Link>
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                <h2 className="work-sans font-semibold"></h2>
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

                    {/* nav items for large device */}
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
                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item mr-4' : 'menu-item text-black mr-3 color'} to='/'>Home</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item' : 'menu-item text-[#131313CC]'} to='/allTouristsSpot'>All Tourists Spot</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item ml-4' : 'menu-item text-[#131313CC] ml-3'} to='/addTouristsSpot'>Add Tourists Spot</NavLink>

                        {/* protected route: After login the menu item will appear */}
                        {
                            user && (<NavLink className={({ isActive }) => isActive ? 'isActive menu-item ml-4' : 'menu-item text-[#131313CC] ml-3'} to='/myList'>My List</NavLink>)
                        }
                    </ul>
                </div>

                {/* toggle icon for theme setup */}
                <div className="absolute top-3 right-0 w-10 md:top-5 md:right-56 block lg:hidden">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input className="" type="checkbox" onChange={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current  w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </div>


                {/* navbar end section */}
                <div className="navbar-end flex ml-28 lg:ml-auto -mt-4 md:-mt-auto md:-mt-2">
                    {/* toggle icon for theme setup */}
                    <div className="pr-10 mt-4 w-15 h-11 hidden lg:block">

                        <a data-tooltip-id="my-tooltip" data-tooltip-content="Theme">
                            <label className="swap swap-rotate">

                                {/* this hidden checkbox controls the state */}
                                <input className="" type="checkbox" onChange={handleToggle} />

                                {/* sun icon */}
                                <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-off fill-current  w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                        </a>
                    </div>

                    <Zoom>
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
                    </Zoom>
                    <button onClick={handleSignOut} className="btn btn-sm btn-ghost hover:bg-violet-600 lg:ml-2 hover:text-white">Log Out</button>

                </div>
            </div>
            <Tooltip id="my-tooltip" effect="solid" place="top" className="custom-tooltip w-4" />
        </div>
    );
};

export default Navbar;