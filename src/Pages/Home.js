import { Link } from 'react-router-dom';
import Banner from '../components/Product/Banner';
import HomeFurniture from '../components/Product/HomeFurniture';
import HomeReview from '../components/Product/HomeReview';

const Home = () => {
    
    return (
        <div className='home-page'>
            <Banner></Banner>
            <HomeFurniture></HomeFurniture>
            <HomeReview></HomeReview>
            <div className='link-btn'>
            <Link to="/review">Show all comments</Link>
            </div>
        </div>
    );
};

export default Home;