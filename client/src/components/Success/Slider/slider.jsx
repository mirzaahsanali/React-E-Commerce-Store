import React, { useState, useEffect } from 'react';
import img1 from '../../../assets/Mockup/Frame1.png';
import img2 from '../../../assets/Mockup/Frame2.png';
import img3 from '../../../assets/Mockup/Frame3.png';
import img4 from '../../../assets/Mockup/Frame4.png';
import img5 from '../../../assets/Mockup/Frame5.png';

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex === 4 ? prevIndex : prevIndex + 1)); // Stop at the 5th image
        }, 500); // Change image every 0.5 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []); // Run only once on component mount

    const images = [
        img1, 
        img2, 
        img3, 
        img4, 
        img5
    ];

    return (
        <>
        <div>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
        </>
    );
};

export default ImageSlider;
