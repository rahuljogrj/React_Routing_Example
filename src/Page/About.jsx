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

            <h3>Likes </h3>

 

            <button className="btn btn-primary" onClick={handleClick}>{likeHeader} : {likes}</button>
            <button className="btn btn-primary ms-3" onClick={handleClickSetZero}>{Likesheadernew} : {likes}</button>

          {/*  <ListExample/>*/}
        </div>
    );
};

export default About;
