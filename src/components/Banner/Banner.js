import { useEffect, useState } from 'react';
import '../Product/Product.css';

const slides = [
    {
      id: 1,
      title: "Furnishing our furniture & home furnishing product",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,4",
      link: "https://i.ibb.co/Lgsw9j7/customer.jpg"
    },
    {
      id: 2,
      title: "Innovation our furniture & home furnishing product",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,3",
      link: "https://i.ibb.co/h2D3k0p/service.jpg"
    },
    {
      id: 3,
      title: "Featuring our furniture & home furnishing product",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,2",
      link: "https://i.ibb.co/yNSV1qz/best-quality.jpg"
    },
    {
      id: 4,
      title: "Explore our furniture & home furnishing product",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,1",
      link: "https://i.ibb.co/wC6ZFqH/quality.jpg"
    }
  ];

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
    };
    const slidePrev = (e) => {
        setCurrentSlide((prev) => {
        return prev === 0 ? slides.length - 1 : currentSlide - 1;
        });
    };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

    return (
        <div>
            <Slide
                image={slides[currentSlide]}
                slideNext={slideNext}
                slidePrev={slidePrev}
            />
        </div>
    );
};

export default Banner;

const Slide = (props) => {
    return (
        <div style={{boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}} className="shadow-2xl transition p-4 mt-5 ">
          <div className="container">
          <div className="row">
            
            <div className="col-md-5">
                <h3 className="text-justify"> {props.image.title}</h3>
                <h5 className="text-justify"> {props.image.description}</h5>
            </div>
            <div className="col-md-7">
                <img className="transition w-100" src={props.image.link} alt="Sliderr_image" />
            </div>
            <div className="text-center mt-2 col-md-12">
                <button className="btn btn-primary mx-1" onClick={props.slidePrev}>
                {"<"} 
                </button>
                
                <button className="btn btn-primary" onClick={props.slideNext}>
                {">"} 
                </button>
            </div>
      </div>
      </div>
      </div>
    );
  };

