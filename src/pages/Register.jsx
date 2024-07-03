import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import {FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import Navbar from "../component/Navbar";
import toast from "react-hot-toast";
import UseAuth from "../component/UseAuth";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    const [registerError, setRegisterError] = useState('')

    const {createUser, googleLogin, gitHubLogin} = UseAuth()
    
    const {register, handleSubmit, formState: { errors }, reset} = useForm()

      const onSubmit= (data) => {
        console.log(data);
        // error reset
        setRegisterError('')
        const {email, password} = data

        if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            setRegisterError('Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter');
            toast.error('Please provide valid password!');
            return;
            
        }
        createUser(email, password)
        .then(result => {
            console.log(result)
            toast.success('User Registered Successfully!');
            reset();
        })
        .catch((error) => {
            console.log(error)
            return toast.error('This User Already Exists!');
        });

      }

      // dynamic title
    useEffect((()=>{
        document.title = "Tourism Management | Register"
    }),[])

      //   for google login
      const handleGoogleLogin = () => {
        googleLogin()
        .then(result =>{
            console.log(result.user)
        })
      }


      //   for github login
      const handleGitHubLogin = () => {
        gitHubLogin()
        .then(result => {
        console.log(result.user)
        });
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-gray-50 container mb-[80px] mx-auto">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                    </div>
                    <div className="card shrink-0 lg:w-[600px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">

                            {/* this is for Name field */}
                            <div className="form-control -mt-1">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered -mt-1" {...register("fullName", { required: true })} />
                                {errors.fullName && <span className="text-red-500 text-[14px]">This field is required</span>}
                            </div>

                            {/* This is for Email field */}
                            <div className="form-control mt-3">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered -mt-1" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500 text-[14px]">This field is required</span>}
                            </div>

                            {/* This is for Photo URL field*/}
                            <div className="form-control my-3">
                                <input type="text" name="text" placeholder="Photo url" className="input input-bordered -mt-1" 
                                {...register("photoUrl", { required: false })} />
                            </div>

                            {/* This is for Password field*/}
                            <div className="form-control">
                                <input 
                                type={showPassword ?"text" : "password"}  
                                name="password" 
                                placeholder="Password" 
                                className="input input-bordered -mt-1" 
                                {...register("password", { required: true })} />
                                <a className="relative" href="#">
                                    <span className="absolute right-4 -top-8" onClick={()=> setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                </a>
                                {errors.password && <span className="text-red-500 text-[14px]">This field is required</span>}
                                {/* password validation field error show */}
                                <div>
                                    {
                                        registerError && <p className="text-[12px] text-red-500">{registerError}</p>
                                    }
                                </div>
                                <label className="">
                                    <p className="text-[14px] w-[220px] text-[#00000082] mx-auto mt-2">Already have an account? <Link to='/login'className="hover:link font-semibold text-[14px] text-[#22be0a]">Login</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn border-none bg-[#22be0a] hover:bg-[#22be0ad8] text-white">Sign Up</button>
                            </div>
                        </form>

                         {/* This is for social login buttons */}                       
                        <div className="flex items-center -mt-3">
                            <hr className="w-full ml-8"/>
                            <p className="px-4 text-[#00000082]">Or</p>
                            <hr className="w-full mr-8" />
                        </div>
                        <div className="form-control mt-3 px-8 relative">
                            <button onClick={()=> handleGitHubLogin()} className="btn border-none bg-[black] hover:bg-[#000000cb] text-white">Continue with Github</button>
                            <IoLogoGithub className="text-white absolute top-3 left-[60px] text-[24px]" />
                        </div>
                        <div className="form-control mt-4 px-8 pb-6 relative">
                            <button onClick={()=> handleGoogleLogin()} className="btn border-none text-white bg-gray-400 hover:bg-gray-300">Continue with Google</button>
                            <FcGoogle className="absolute top-3 left-[60px] text-[24px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;