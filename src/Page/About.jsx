// Pages/About.js
import React, { useState } from 'react';
import ListExample from '../Components/ListExample';


function About({ likeHeader, Likesheadernew }) {

    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
    }

    const handleClickSetZero = () => {
        setLikes(0);
    }

    return (
        <div>
            <h1>About Us</h1>
            <p>This is the About Us page content.</p>

            <h3>{likeHeader}</h3>

            <h2>{Likesheadernew}</h2>

            <button className="btn btn-primary" onClick={handleClick}>Likes: {likes}</button>
            <button className="btn btn-primary ms-3" onClick={handleClickSetZero}>Reset Likes: {likes}</button>

          {/*  <ListExample/>*/}
        </div>
    );
};

export default About;
