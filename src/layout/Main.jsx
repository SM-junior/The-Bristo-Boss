
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/shared/Footer';
import Navbar from '../pages/Home/shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;