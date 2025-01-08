// Pages/About.js
import React, { useState } from 'react';


function About({ likeHeader, Likesheadernew }) {

    const [likes, setLikes] = useState(0);

    const handleClickIncrease = () => {
        setLikes(likes + 1);
    }

    const handleClickSetZero = () => {
        setLikes(0);
    }

    const handleClickDecrease = () => {
        if (likes == 0) {
            return false;
        }
        setLikes(likes - 1);
    }

    return (
        <div>
            <h1>About Us</h1>
            <hr/>
            <h3>{likeHeader} : {likes} </h3>
            <div className="d-flex">
                <button className="btn btn-sm btn-primary" onClick={handleClickIncrease}>Add Likes +1 </button>
                <button className="btn btn-sm btn-primary ms-3" onClick={handleClickSetZero}>{Likesheadernew} 0</button>
                <button className="btn btn-sm btn-primary ms-3" onClick={handleClickDecrease}>Remove Decrease -1</button>
            </div>
        </div>
    );
};

export default About;
