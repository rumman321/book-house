import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navbar/Navber";
import Books from "../Books/Books";
import Banner from "../Banner/Banner";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navber></Navber>
            <Banner></Banner>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;