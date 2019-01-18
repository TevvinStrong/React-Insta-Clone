import React from 'react';
import './SearchBar.css';
import instaCam from '../../images/instaCam.png';
import instaLine from '../../images/instaLine.png';
import instaText from '../../images/instaText.png';
import instaCompass from '../../images/instaCompass.png';
import instaHeart from '../../images/instaHeart.png';
import instaProfile from '../../images/instaProfile.png';

const SearchBar = props => (
    <header>
        <div className="logos">
            <div className="icons">
                <img className="camera" src={instaCam} alt="Instagram Home Icon" />
                <img className="line" src={instaLine} alt="Instagram Line between home and text" />
                <img className="text" src={instaText} alt="Instagram Text Icon" />
            </div>

            <div className="search">
                <input type="text"
                    placeholder="&#128269;Search" />
            </div>

            <div className="threeIcons">
                <img className="compass" src={instaCompass} alt="Instagram Compass Icon" />
                <img className="heart" src={instaHeart} alt="Instagram Heart Icon" />
                <img className="profile" src={instaProfile} alt="Instagram Profile Icon" />
            </div>
        </div>
    </header>
);




export default SearchBar;