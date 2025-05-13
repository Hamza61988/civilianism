import React, { useState, useEffect } from 'react';
import './Images.css'; 

export function Images() {
 
  const imageSources = [
  'https://i.postimg.cc/FRLfG6zm/imagee.png', 'https://i.postimg.cc/C54xQpgy/imagee2.png' ,'https://i.postimg.cc/J4Ph38xZ/work.png' , 'https://i.postimg.cc/3JKRDNX3/work2.png'
  
  ]
  const [currentImages, setCurrentImages] = useState([]);

  const shuffleImages = () => {
    const shuffledImages = [...imageSources].sort(() => Math.random() - 0.5).slice(0, 3);
    setCurrentImages(shuffledImages);
  };

  useEffect(() => {
    shuffleImages();
    const intervalId = setInterval(shuffleImages, 6000); 

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
