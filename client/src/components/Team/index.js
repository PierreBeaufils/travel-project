import React from 'react';
import './about.scss';
import { User, Linkedin } from 'react-feather';

const Team = () => (
  <div className="about">
    <h2>Notre équipe</h2>
    <div className="team-container">

      <div className="teamcard">
        <div className="teamcard-picture">
          <User color="#2B7AFD" size={100} />
        </div>
        <div className="teamcard-content">
          <p className="teamcard-content-name">Pierre Beaufils</p>
          <p className="teamcard-content-role">Lead Dev Front</p>
          <p className="teamcard-content-description">blabldsq asdqd  dsqdsqddsq sqd</p>
          <div className="teamcard-content-social">
            <a href="https://www.linkedin.com/in/pierre-beaufils/">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="teamcard">
        <div className="teamcard-picture">
          <User color="#2B7AFD" size={100} />
        </div>
        <div className="teamcard-content">
          <p className="teamcard-content-name">Pierre Beaufils</p>
          <p className="teamcard-content-role">Lead Dev Front</p>
          <p className="teamcard-content-description">blabldsq asdqd  dsqdsqddsq sqd</p>
          <div className="teamcard-content-social">
            <a href="https://www.linkedin.com/in/pierre-beaufils/">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

    </div>
    <h3>Conditions d'utilisation</h3>
  </div>
);

export default Team;
