import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Page/Home'; // Example page component
import About from '../Page/About'; // Example page component
import Navbar from "./Navbar";


function RoutingCompo() {
    return (

        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About likeHeader={"Likes Count"} Likesheadernew={"Likes Count New"} />} />
                    <Route path="/navbar" element={<Navbar />} />
                </Routes>
            </Router>
        </>

    )
}

export default RoutingCompo;