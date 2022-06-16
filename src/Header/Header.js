import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../components/CustomLink/CustomLink';
import auth from '../components/Firebase/Firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    return (
        <div className="bg-secondary sticky-top">
        <div className="container">
            <div className='d-flex justify-content-between align-items-center'>
            <h1>Furniture Furnished</h1>
            <nav className='d-flex justify-content-center align-items-center gap-3'>
                <CustomLink to="/">Home</CustomLink> 
                <CustomLink to="/about">About</CustomLink> 
                <CustomLink to="/blogs">Blogs</CustomLink> 
                <CustomLink to="/review">Review</CustomLink> 
                <CustomLink to="/furniture">Furniture</CustomLink> 
                <CustomLink to="/chartReview">ChartReview</CustomLink> 
                <CustomLink to="/dashboard">Dashboard</CustomLink> 
                {
                    user && <p className='mt-2'>{user?.displayName.slice(0, 6)}</p>
                }
                {
                    user ? 
                    <button onClick={logout} className='btn btn-link text-black'>LogOut</button>
                    :
                    <CustomLink to="/login">Login</CustomLink> 
                }
                
            </nav>
        </div>
        </div>
        </div>
    );
};

export default Header;