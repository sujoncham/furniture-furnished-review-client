import useReview from '../../hooks/useReview';
import Item from './Item';

const ProductReview = () => {
    const [reviews] = useReview();
    // const reviewData = reviews.slice(0, 3);

    return (
        <div className='container mt-5 mb-5'>
            <h4 className='p-1'>Product Review : {reviews.length}</h4>
           <div className='row'>
           {
                reviews.map(review => <Item key={review._id} review={review}></Item>)
            }
           </div>
           
        </div>
    );
};

export default ProductReview;