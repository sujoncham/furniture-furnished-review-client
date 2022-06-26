import { Audio } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const LoadingSpinner = () => {
    return (
        <div>
            <Audio
                height="500"
                width="650"
                color='grey'
                ariaLabel='loading'
                />
        </div>
    );
};

export default LoadingSpinner;