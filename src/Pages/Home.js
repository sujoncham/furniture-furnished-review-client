import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import HomeFurniture from '../components/Product/HomeFurniture';
import HomeReview from '../components/Product/HomeReview';
import Services from '../components/Services/Services';

const Home = () => {
    
    return (
        <div className='home-page'>
            <Banner></Banner>
            <HomeFurniture></HomeFurniture>
            <HomeReview></HomeReview>
            <Services></Services>
            <Contact />
        </div>
    );
};

export default Home;