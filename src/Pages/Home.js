import Banner from '../components/Banner/Banner';
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
        </div>
    );
};

export default Home;