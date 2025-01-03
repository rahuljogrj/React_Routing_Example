// Pages/Home.js
import React from 'react';
import Accordian from '../Components/Accordian';


const Home = () => {
    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <p>This is the home page content.</p>

            <Accordian />


            <h1>Welcome to Flaticon in React!</h1>
            <i className="fi fi-sr-home"></i> {/* Home Icon */}
            <i className="fi fi-sr-user"></i> {/* User Icon */}
            <i className="fi fi-sr-settings"></i> {/* Settings Icon */}

        </div>
    );
};

export default Home;
