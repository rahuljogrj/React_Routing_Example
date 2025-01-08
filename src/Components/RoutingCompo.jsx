import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Page/Home'; // Example page component
import About from '../Page/About'; // Example page component
import Navbar from "./Navbar";
import IconPage from '../Page/IconPage';


function RoutingCompo() {
    return (

        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About likeHeader={"Likes Count"} Likesheadernew={"Likes Reset"} />} />
                    <Route path="/aboutNew" element={<About likeHeader={"Likes Count New"} Likesheadernew={"Likes Reset New"} />} />
                    <Route path="/navbar" element={<Navbar />} />
                    <Route path="/IconPage" element={<IconPage />} />
                </Routes>
            </Router>
        </>

    )
}

export default RoutingCompo;