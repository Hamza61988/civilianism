import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./App.css"; // Import custom styles
import LoginCard from "./LoginCard";

const App = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div id="civil" className="App">
    
      {showLogin && <LoginCard onClose={() => setShowLogin(false)} />}

  
      <div  className="content" data-aos="fade-left" data-aos-duration="1000">
       
        <h1>What is it?</h1>
        <p>
          This is a groundbreaking collection of <strong>5678 NFTs</strong> on <strong>Solana</strong>, designed for those who
          value <strong>freedom, equality, and unity</strong>. It’s more than digital assets; it's a **membership**
          granting exclusive benefits, including **airdrops, custom derivatives, and priority access** to future developments.
        </p>

        <h1>Club Vision</h1>
        <p>
          Our goal is to become the <strong>most influential NFT club on Solana</strong>, where members unite to drive progress,
          inspire change, and elevate each other. We don't compete; we focus on continuous growth.
        </p>
      </div>
    </div>
  );
};

export default App;
