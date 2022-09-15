import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Item from './Item';

const ProductReview = () => {
    const [reviews] = useReview();
    const reviewData = reviews.slice(0, 3);

    return (
        <div className='container mt-5 mb-5'>
            <h3>Showing Review : {reviewData.length} of {reviews.length}</h3>
           <div className='row'>
           {
                reviewData.map(review => <Item key={review._id} review={review}></Item>)
            }
           </div>
           <div className='link-btn'>
                <Link to="/review">Show all comments</Link>
            </div>
           
        </div>
    );
};

export default ProductReview;