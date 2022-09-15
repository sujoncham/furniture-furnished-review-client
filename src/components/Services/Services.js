import React from 'react';
import { Card } from 'react-bootstrap';
import { FaHome, FaHSquare, FaLayerGroup, FaShoppingCart } from "react-icons/fa";

const Services = () => {
    return (
        <div className='container mb-5'>
            <div className="col-md-12 text-center mb-5">
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla enim molestiae eius dolor ratione.</p>
            </div>
            <div className="row">
                <div className="col-md-3 text-center">
                    <Card>
                        <Card.Body>
                            <FaHSquare size={50} className="text-warning" />
                            <Card.Title>Corporate Design</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">Draw your idea, our challenge</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link className='btn btn-warning' href="#">see details</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 text-center">
                    <Card>
                        <Card.Body>
                            <FaHome size={50} className="text-warning" />
                            <Card.Title>Home Decorator</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">Your Home, our product</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link className='btn btn-warning' href="#">see details</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 text-center">
                    <Card>
                        <Card.Body>
                            <FaLayerGroup size={50} className="text-warning" />
                            <Card.Title>Office Decorator</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">Your idea, our hard work</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link className='btn btn-warning' href="#">see details</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 text-center">
                    <Card>
                        <Card.Body>
                            <FaShoppingCart size={50} className="text-warning" />
                            <Card.Title>Home Delivery</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">Buy Product, free deliver</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link className='btn btn-warning' href="#">see details</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Services;