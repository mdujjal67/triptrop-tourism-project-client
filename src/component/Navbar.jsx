import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import UseAuth from "./UseAuth";


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
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl" to='/'>Home</Link>

                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl my-2" to='/update-profile'>All Tourists Spot</Link>

                            {
                                user && (<Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl mb-2" to='/user-profile'>Add Tourists Spot</Link>)
                            }

                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl mb-2" to='/legal-counsel'>My List</Link>

                            {
                                user && (<Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl mb-2" to='/userProfile'>User Profile</Link>)
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-[18px] md:text-lg lg:text-xl hover:bg-[#22be0ad8] hover:text-white">Haven Vista</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item mr-4' : 'menu-item text-[#131313CC] mr-3 color'} to='/'>Home</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item' : 'menu-item text-[#131313CC]'} to='/update-profile'>All Tourists Spot</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item ml-4' : 'menu-item text-[#131313CC] ml-3'} to='/legal-counsel'>Add Tourists Spot</NavLink>

                        {/* protected route: After login the menu item will appear */}
                        {
                            user && (<NavLink className={({ isActive }) => isActive ? 'isActive menu-item ml-4' : 'menu-item text-[#131313CC] ml-3'} to='/user-profile'>My List</NavLink>)
                        }
                    </ul>
                </div>


                {/* navbar end section */}
                <div className="navbar-end grid ml-28 lg:ml-auto -mt-4 md:-mt-auto lg:-mt-auto">
                    {user ?
                        <NavLink to='/user-profile'>
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
                            <button onClick={handleSignOut} className="btn btn-sm btn-ghost hover:bg-[#22be0ac8] text-white bg-[#23BE0A] lg:ml-2 hover:text-white">Log Out</button>
                        </div>
                        </NavLink>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm btn-ghost hover:bg-[#22be0ad8] hover:text-white">Login</button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;