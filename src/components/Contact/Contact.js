import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className="col-md-12">
                    <h1 className='text-center'>Contact With Us</h1>
                    <p className='text-center'>you feedback, our business</p>
                </div>
                <div className="col-md-6">
                    <h4 className='text-warning'>Our Office</h4>
                    <address>
                    <span>Segun Lake, 125 Street, 452 House</span> <br />
                        <span>New York, USA</span> <br />
                        <span>Phone: +965622332</span> <br />
                        <span>Email: furniture@gmail.com</span> <br />
                    </address>
                    <h4 className='text-warning'>Corporate Office</h4>
                    <address>
                        <span>Segun Lake, 125 Street, 452 House</span> <br />
                        <span>New York, USA</span> <br />
                        <span>Phone: +965622332</span> <br />
                        <span>Email: furniture@gmail.com</span> <br />
                    </address>
                    <div>
                        <div>
                            <Link to="/" className='text-warning'> <i className='fa fa-twitter h4'></i> </Link>
                            <Link to="/" className='text-warning'> <i className='fa fa-facebook text-dark h4'></i> </Link>
                            <Link to="/" className='text-warning'> <i className='fa fa-linkedin h4'></i> </Link>
                            <Link to="/" className='text-warning'> <i className='fa fa-google-plus text-dark h4'></i> </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" placeholder="enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="write subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;