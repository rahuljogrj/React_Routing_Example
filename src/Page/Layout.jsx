import '../App.css';
import ListExample from "../Components/ListExample";
import RoutingCompo from '../Components/RoutingCompo';
 

function Layout() {
    return (

        <>
            <div className="App">
                <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
                    <div className="container-fluid ms-3">
                        <a className="navbar-brand" href="/"><b>DR Foundation</b></a>

                        <i class="fi fi-sr-menu-burger text-center me-3 pull-right" id="menuToggleButton" data-bs-toggle="collapse" href="#leftNavBar" role="button" aria-expanded="true" aria-controls="leftNavBar"></i>
                    </div>
                </nav>
            </div>


            <div className="combinediv d-flex justify-content-between">

                <div className="mainDiv col-md-10  col-sm-12">
                    <RoutingCompo/>
                </div>

                <div className="lnavbar col-md-2 col-sm-12 collapse show collapse-horizontal" id="leftNavBar">
                    <input className="form-control searchbar me-2" type="search" placeholder="Search" aria-label="Search" />
                    <ListExample />
                </div>
            </div>


        </>

    );
}

export default Layout;
