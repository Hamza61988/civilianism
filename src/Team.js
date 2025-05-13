import React from 'react';
import './Team.css';

const TeamMemberCard = ({ name, image, bio, isLeft }) => {
  return (
    <div className={`team-member ${isLeft ? 'left' : 'right'}`}>
      {isLeft && <img src={image} alt={name} className="profile-img" />}
      <div className="bio-content">
        <h2 className="name">{name}</h2>
        <p className="bio">{bio}</p>
      </div>
      {!isLeft && <img src={image} alt={name} className="profile-img" />}
    </div>
  );
};

const Team = () => {
  return (
    <div id="team" >
    <div className="team-container">
      <h1 className="team-heading">Team</h1>
      <TeamMemberCard 
        name="FRIEDMAN" 
        image="https://civilianismclub.com/static/media/Friedman.dd4b9273c10d1004e13d.webp" 
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." 
        isLeft={true}
      />
      <TeamMemberCard 
        name="KAVAN LEO" 
        image="https://civilianismclub.com/static/media/Kavan.f313ac110c649acc01d7.webp"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        isLeft={false}
      />
      <TeamMemberCard 
        name="OLD SPORT" 
        image="https://civilianismclub.com/static/media/Maxon.051c830ea634d9ba822c.webp"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        isLeft={true}
      />
      <TeamMemberCard 
        name="MAXON X87" 
        image="https://civilianismclub.com/static/media/Pharaoh.007bc066e24e348dd384.webp"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        isLeft={false}
      />
      <TeamMemberCard 
        name="PHARAOH" 
        image="https://i.postimg.cc/dQR31rTW/work3.png"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        isLeft={true}
      />
    </div>
    </div>
  );
};

export default Team;
