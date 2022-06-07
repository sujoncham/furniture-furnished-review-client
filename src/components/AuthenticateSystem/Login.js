import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }


    return (
        <div className='container mt-5 mb-5'>
        <div className='row justify-content-md-center'>
            
        <div className='col-md-4 col-offset-4'>
        <h1 className='mb-3 text-center text-uppercase'>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
          
                <Button className='w-50 text-center' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
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