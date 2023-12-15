
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Home/shared/Footer';
import Navbar from '../pages/Home/shared/Navbar';

const Main = () => {
    // const location = useLocation()
    // console.log(location.pathname);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;