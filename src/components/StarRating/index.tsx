import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps{
    rating: number ;
    onRating: (rate: number) => void;
}


const StarRating = ({rating, onRating}: StarRatingProps) => {
    
    const [hover, setHover] = useState<number>(0);

    return (
        <div className="w-48 p-5 mx-auto grid grid-cols-5 gap-10 justify-items-center ">
        {
            [...Array(5)].map((star, i)=> {
                const ratingValue = i + 1;
                return(
                    <label key={ratingValue}>
                        <input className='hidden' 
                        
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => onRating(ratingValue)} 
                        />
                        <FaStar
                        size={30}
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)} 
                        />
                    </label>

                )
            })
        }
        </div>
    )


}

export default StarRating

