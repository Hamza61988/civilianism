import React, { useState, useEffect } from 'react';
import './Images.css'; // or './Images.module.css' if using CSS modules

export function Images() {
 
  const imageSources = [
    "https://media.discordapp.net/attachments/1294402226248220703/1324209547639914507/1592.png?ex=67a0303e&is=679edebe&hm=fc74bc9a627874dbd9472bea98c7ba7fe14a914a70441e178e7375d9b19148d1&=&format=webp&quality=lossless&width=437&height=437",
    "https://media.discordapp.net/attachments/1294402226248220703/1307765139268833340/3651.png?ex=67a05972&is=679f07f2&hm=b29f4278053ae252bb446a0f0e3c16a4d0b91bf5c6cdf67b9a328325bb4ca7d8&=&format=webp&quality=lossless&width=636&height=636",
   "https://media.discordapp.net/attachments/1294402226248220703/1305074551918694410/0015.png?ex=67a072e4&is=679f2164&hm=8e27c16ceb5c293b3013f005657c0d9621554fcc21fab2efb493a06dc83b35c8&=&format=webp&quality=lossless&width=636&height=636",
   ,"https://media.discordapp.net/attachments/1294402226248220703/1305074551918694410/0015.png?ex=67a072e4&is=679f2164&hm=8e27c16ceb5c293b3013f005657c0d9621554fcc21fab2efb493a06dc83b35c8&=&format=webp&quality=lossless&width=636&height=636",
   "https://media.discordapp.net/attachments/1294402226248220703/1330024498950307880/2146.png?ex=67a03fd7&is=679eee57&hm=d3636163a2d1eb0a761e2d7a0542382e7fe7099bbe1e363a74866db4b36ef806&=&format=webp&quality=lossless&width=636&height=636"
  ];
  

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
