
import { useContext } from "react";
import { AuthContext } from "../pages/AuthProvider";
// import { AuthContext } from "../pages/AuthProvider";


const UseAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default UseAuth;