import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "../src/Components/Navbar";
import ListExample from "../src/Components/ListExample";
import Home from './Page/Home'; // Example page component
import About from './Page/About'; // Example page component

function App() {
    return (

      <>
        <Router>
        <div className="App">
                <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">DR Foundation</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          {/*<li className="nav-item">*/}
                          {/*              <a className="nav-link active" aria-current="page" href="/">Home</a>*/}
                          {/*</li>*/}
                          {/*<li className="nav-item">*/}
                          {/*              <a className="nav-link" href="/about">Link</a>*/}
                          {/*</li>*/}

                      </ul>
                  </div>
              </div>
          </nav>

         
        </div>

        <div className="combinediv d-flex justify-content-between">
                <div className="lnavbar ">
              <input className="form-control searchbar me-2 " type="search" placeholder="Search" aria-label="Search" />
                    <ListExample />

                </div>
                <div className="mainDiv">

                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About likeHeader={"Likes Count"} Likesheadernew={"Likes Count New"} />} />
                            <Route path="/navbar" element={<Navbar />} />
                    </Routes>


          </div>
                </div>
            </Router>

      </>

  );
}

export default App;
