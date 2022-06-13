import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('https://sleepy-thicket-05560.herokuapp.com/furniture')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);


    return [reviews, setReviews];
}

export default useReview;