import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import useToken from '../hooks/useToken';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [token] = useToken(user || gUser);
    const location = useLocation();

    let from = location.state?.from?.pathName || "/";
    
    let errorHandle;
    if (error || gError) {
      errorHandle = `${error?.message || gError.message}`;
    }

    if (loading || gLoading) {
      return <LoadingSpinner></LoadingSpinner>;
    }
  
      if (token) {
        navigate(from, { replace: true });
      }
 

      const handleFormLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
          signInWithEmailAndPassword(email, password);
      }

    return (
        <div className='container mt-5 mb-5'>
        <div className='row justify-content-md-center'>
            
        <div className='col-md-4 col-offset-4'>
        <h1 className='mb-3 text-center text-uppercase'>Login</h1>
            <Form onSubmit={handleFormLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter password" />
                </Form.Group>
          
                <Button className='w-50 text-center' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-danger'>{errorHandle}</p>
            <p>New at Furniture Store? please, <Link to='/register'>create account</Link> </p>
            <div className='mt-5'>
            <Button className='w-100'
            onClick={() => signInWithGoogle()} 
            variant="primary" 
            type="submit">
                    sign in with Google
                </Button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Login;