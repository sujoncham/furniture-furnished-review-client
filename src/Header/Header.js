import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo/logo.jpg';
import CustomLink from '../components/CustomLink/CustomLink';
import auth from '../components/Firebase/Firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };

      const myProfile = (id) =>{
        navigate(`/profile/${id}`);
      }

    return (
        
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark" className='sticky-top'>
            <Container>
                <Navbar.Brand href="#home">
                    <div className='d-flex justify-content-start'>
                        <img style={{width: 60}} src={logo} alt="" />
                        <span style={{color: '#3c1361'}} className='p-1 text-uppercase fw-bolder'></span>
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
                            {user &&  <CustomLink to="/dashboard">Dashboard</CustomLink> }
                                {
                                    !user ? 
                                    <CustomLink to="/login">Login</CustomLink>
                                    :
                                    <NavDropdown className='profile' title="Profile" id="collasible-nav-dropdown">
                                    <NavDropdown.Item to='/'>{user && user?.displayName?.slice(0, 6)}</NavDropdown.Item>
                                    <NavDropdown.Item as={CustomLink} to='/' onClick={logout} className='text-black'>LogOut</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={()=>myProfile(user?.uid)}>Profile</NavDropdown.Item>
                                    </NavDropdown>
                                }
                   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};

export default Header;