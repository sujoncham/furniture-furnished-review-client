import React from "react";

const About = () => {
  return (
    <div className="container mb-5">
        <div className="row">
            <div className="col-md-12 text-center mb-5">
            <h1 className="mt-5">About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div className="col-md-12 bg-dark text-warning p-5">
                <h3>
                    Furniture is considered to be the game-changer in leading furniture
                    industry. Carefully-chosen raw material, environment-friendly
                    business practice and customer-centric approach is what made
                    furniture a beloved brand at home and abroad.
                </h3>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-start align-items-center">
                <div>
                <h3>Our Vission</h3>
                <h5>Design with intention</h5>
                <p>
                    There's just one way for us to create and that is with intention.
                    Behind the design of our pieces there's an extensive process in
                    which we combine what inspires us with what is needed, and look for
                    a way to make it unique and functional. We don't want to just add a
                    new product to our collection, the idea is that each piece would
                    transmit our values, beliefs, and the love and care that's behind
                    them improving any environment they're introduced to This is what
                    gives value to what we do and pushes us to continue to improve
                    daily.
                </p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <img
                    className="w-100"
                    src="https://i.ibb.co/6yMdQV2/furniture9.jpg"
                    alt=""
                />
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-6">
            <img className="w-100" src="https://i.ibb.co/hgmkj2b/furniture4.jpg" alt="" />
            </div>

            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-start align-items-center">
                <div>
                    <h3>Our Aproach</h3>
                    <h5>Transform how the world interacts with furniture.</h5>
                    <p>
                    We are on a mission to transform how the world interacts with
                    furniture and home accessories through the design and crafting of
                    pieces that are functional, unique and that have an emotional,
                    ethic, and real value.
                    </p>
                </div>
            </div>
        </div>

        <div className="row mt-5 mb-5">
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-start align-items-center">
                <div>
                <h3>Our Process</h3>
                <p> Although traditionally old patterns have always
                    favoured the solid wood and beautifully decorated furniture but in
                    the age of millenials people are looking towards more simple and
                    elegantly designed furnitures for their homes. And Furniture
                    has delivered on that very successfully. Being the only FSC
                    certified furniture manufacturers in this market, Furniture uses
                    environment friendly raw materials that cause minimal waste. Lean
                    manufacturing is done here to produce diverse products with minimal
                    waste of materials, resources, processing, and human involvement.
                </p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <img className="w-100" src="https://i.ibb.co/0mV41qd/furniture1.jpg" alt="" />
            </div>
        </div>
    </div>
  );
};

export default About;
