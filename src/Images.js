import React, { useState, useEffect } from 'react';
import './Images.css'; // or './Images.module.css' if using CSS modules

export function Images() {
  // Define an array of image sources (add your own images here)
  const imageSources = [
    "work.png", "imagee.png", "work2.png", "work3.png", "imagee2.png"  ];

  // State to hold the current images being displayed
  const [currentImages, setCurrentImages] = useState([]);

  // Shuffle the image sources every 6 seconds
  const shuffleImages = () => {
    // Randomize the image order and take 3 of them
    const shuffledImages = [...imageSources].sort(() => Math.random() - 0.5).slice(0, 3);
    setCurrentImages(shuffledImages);
  };

  // UseEffect to shuffle every 6 seconds
  useEffect(() => {
    shuffleImages(); // Initial shuffle when component is first loaded
    const intervalId = setInterval(shuffleImages, 6000); // Shuffle every 6 seconds

    // Cleanup the interval when component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="images-container">
      {currentImages.length > 0 && currentImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          className={
            index === 0 ? 'first' :
            index === 1 ? 'middle' :
            'third'
          }
        />
      ))}
    </div>
  );
}
