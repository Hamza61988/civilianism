import React, { useState, useEffect } from 'react';
import './Images.css'; // or './Images.module.css' if using CSS modules

export function Images() {
  // Define an array of image sources (add your own images here)
  const imageSources = [
    "work.png", "https://media.discordapp.net/attachments/1294402226248220703/1307765139268833340/3651.png?ex=679db672&is=679c64f2&hm=8635052da84d4b95974d7939ee5532b9d4cd114cc60cedc47d437de661c55496&=&format=webp&quality=lossless&width=636&height=636", "https://media.discordapp.net/attachments/1294402226248220703/1317798615598497833/2798.png?ex=679df599&is=679ca419&hm=27479a0d2a551ccfaabc6cb5dd8d287da1f839960d8649ca5e2ca9a562ebc092&=&format=webp&quality=lossless&width=636&height=636", "https://media.discordapp.net/attachments/1294402226248220703/1315000419130413177/1008.png?ex=679daad3&is=679c5953&hm=caa224e79f15a2ffe2e1b658dc2131f78ac52598ad31ca5623a6ab1b8c8cda1e&=&format=webp&quality=lossless&width=437&height=437", "https://media.discordapp.net/attachments/1294402226248220703/1310965097685843968/2306.png?ex=679d7d23&is=679c2ba3&hm=1c2afdb331d96ae0ca3f65f308a408479765d1010c9368db26def094a310d365&=&format=webp&quality=lossless&width=437&height=437", 
    "work2.png", "work3.png", "https://media.discordapp.net/attachments/1294402226248220703/1306660282730418226/0145.png?ex=679da5f7&is=679c5477&hm=a01b3c5e0bf3b8bdf8b01dd544ad5422c9a413665b400971111f4e38eac4682b&=&format=webp&quality=lossless&width=636&height=636", "https://media.discordapp.net/attachments/1294402226248220703/1305074551918694410/0015.png?ex=679dcfe4&is=679c7e64&hm=01a4165a121bc5da2ee22e1f505efde58ab330e685873d8b759f9b7647a43685&=&format=webp&quality=lossless&width=437&height=437", "https://media.discordapp.net/attachments/1294402226248220703/1298656988162424832/4682.png?ex=679d8951&is=679c37d1&hm=b4c34b8a2cac624798067b8798d9e3472c618dfc97aaebd80cb15ae670a1b242&=&format=webp&quality=lossless&width=636&height=636"
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
