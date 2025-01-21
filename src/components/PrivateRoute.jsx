import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../features/hooks/useAuthStatus"
import Loading from "./Loading"

const PrivateRoute = () => {
    const {loggedIn , checkStatus} = useAuthStatus()

    if(checkStatus){
        return <Loading/>;
    }

    return loggedIn ? <Outlet/> : <Navigate to={"/login"} />;
};

export default PrivateRoute;