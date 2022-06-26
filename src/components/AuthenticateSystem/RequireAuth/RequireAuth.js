import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const RequireAuth = ({children}) =>{
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (error) {
        return <p>{error?.message}</p>
        }

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
      }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }

    return children;

}

export default RequireAuth;