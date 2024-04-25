// import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { useForm } from "react-hook-form";
// import useAuth from "../../hook/useAuth";
import { IoLogoGithub } from "react-icons/io";
// import { useEffect, useState } from "react";
// import { FaEye } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import Navbar from "../component/Navbar";
import UseAuth from "../component/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [loginError, setLoginError] = useState('')

    useEffect((() => {
        document.title = "Haven Vista | Login"
    }), [])

    const { signInUser, googleLogin, gitHubLogin } = UseAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    console.log(location)

    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(from)
                }
            })
    }


    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        // reset error
        setLoginError('')

        const { email, password } = data
        // reset error
        setLoginError('')
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                reset();
                navigate(from)
                toast.success('Login Successful!');
            })
            .catch((error) => {
                console.log(error)
                setLoginError('Wrong Email ID or Password! Please enter correct information.', error)
                toast.error('Please Enter Correct Information!');
            });
    }

    //   for google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success('Login Successful!');
                navigate(from);
            })
        
       
    }


    //   for github login
    const handleGitHubLogin = () => {
        gitHubLogin()
            .then(result => {
                console.log(result.user)
                navigate(from)
            });
        toast.success('Login Successful!');

    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-gray-50 container mb-[80px] mx-auto">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <div className="card shrink-0 lg:w-[600px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* This is for Email field */}
                            <div className="form-control mt-3">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered -mt-1"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500 text-[14px]">This field is required</span>}
                            </div>

                            {/* This is for Password field*/}
                            <div className="form-control mt-4">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered -mt-1 "
                                    {...register("password", { required: true })} />
                                <a className="relative" href="#">
                                    <span className="absolute right-4 -top-8" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                </a>
                                {errors.password && <span className="text-red-500 text-[14px]">This field is required</span>}

                                {/* input field error show */}
                                <div>
                                    {
                                        loginError && <p className="text-[12px] text-red-500">{loginError}</p>
                                    }
                                </div>
                                <label className="label">
                                    <Link to='/forgot-password' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="">
                                    <p className="text-[14px] w-[220px] mx-auto mt-2 text-[#00000082]">Do not have an account? <Link to='/register' className="hover:link font-semibold text-[14px] text-[#22be0a]">Sign Up</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn border-none bg-[#22be0a] hover:bg-[#22be0ad8] text-white">Login</button>
                            </div>
                        </form>

                        {/* This is for social login buttons */}
                        <div className="flex items-center -mt-3">
                            <hr className="w-full ml-8" />
                            <p className="px-4 text-[#00000082]">Or</p>
                            <hr className="w-full mr-8" />
                        </div>
                        {/* google login */}
                        <div className="form-control mt-3 px-8 relative">
                            <button onClick={() => handleSocialLogin(handleGitHubLogin)} className="btn border-none bg-[black] hover:bg-gray-500 text-white">Login with Github</button>
                            <IoLogoGithub className="text-white absolute top-3 left-[60px] text-[24px]" />
                        </div>
                        {/* github login */}
                        <div className="form-control mt-4 px-8 pb-6 relative">
                            <button onClick={() => handleSocialLogin(handleGoogleLogin)} className="btn border-none text-[#00000082] hover:bg-gray-300">Login with Google</button>
                            <FcGoogle className="absolute top-3 left-[60px] text-[24px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;