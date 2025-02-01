import React, { useEffect } from 'react';
import './Roadmap.css'; // Import your CSS file

export function Roadmap() {

  

  useEffect(() => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If the element is about to enter the viewport, add the fade-up class
          entry.target.classList.add('fade-up');
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe the element
    const roadmapElement = document.querySelector('.roadmap');
    if (roadmapElement) observer.observe(roadmapElement);

    // Clean up the observer when component unmounts
    return () => {
      if (roadmapElement) observer.unobserve(roadmapElement);
    };
  }, []);

  return (
    <div id="road" >
    <div  className="roadmap">
      <h5 className="roadmap__title">Phase 1.0: Building the Starship</h5>

      <div   className="roadmap__phase">
        <h3>Mint Progress: 20%</h3>
        <p>Accelerate Promotion: Launch Solana Token Bonus Campaign! Let's spread the word and fire up the engines!</p>
      </div>

      <div className="roadmap__phase">
        <h3>Mint Progress: 50%</h3>
        <p>Club Rewards Kick Off: The “Contributor Leaderboard” is live! Earn points through content creation, active promotion, and impactful project contributions. Top performers will be rewarded—time to climb the ranks!</p>
      </div>

      <div className="roadmap__phase">
        <h3>Mint Progress: 75%</h3>
        <p>Marketing Surge: The top three contributors with the most points + the two most active Club members will win iPhone 16 Pro Max (USA/CA pricing)! Let's turn up the heat and shine bright!</p>
      </div>

      <div className="roadmap__phase">
        <h3>Mint Progress: 88%</h3>
        <p>Show Off Your Collection: Choose your favorite, use it, and flaunt it in your profile! CIVIL will be the talk of the town! Plus, tweet to participate in our random 1 SOL giveaway—spread the word and make CIVIL viral!</p>
      </div>

      <div className="roadmap__phase">
        <h3>Mint Progress: 100%</h3>
        <p>Boost and Transition: Activate TikTok, Instagram, and accept creative submissions. Double down on promotion and launch the NFT Market Making System to elevate liquidity, making your assets more valuable! As liquidity grows, we'll soar into Phase 2.0!</p>
      </div>
    </div>
    </div>
  );
}
