import React from 'react';
import { useParams } from 'react-router-dom';

const FurnitureDetails = () => {
    const {furnId} = useParams();
    return (
        <div>
            <h1>Furniture Details: {furnId}</h1>
        </div>
    );
};

export default FurnitureDetails;