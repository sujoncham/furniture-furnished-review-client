import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../assets/logo/logo.jpg';
import CustomLink from '../components/CustomLink/CustomLink';
import auth from '../components/Firebase/Firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    return (
        
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark" className='sticky-top'>
            <Container>
                <Navbar.Brand href="#home">
                    <div className='d-flex justify-content-start'>
                        <img style={{width: 60}} src={logo} alt="" />
                        <span style={{color: '#3c1361'}} className='p-1 text-uppercase fw-bolder'>Furniture</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto header-top">
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};

export default Header;