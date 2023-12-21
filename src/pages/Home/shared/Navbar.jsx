import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";
import '././css/ Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(authContext)
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => { console.log(error.message) })
    }

    return (
        <div className="navbar bg-black text-white fixed z-10 max-w-screen-xl mx-auto opacity-60">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/shop/Salads'>Shop</Link></li>
                        {user ?
                            <button onClick={handleLogOut} ><Link>Logout</Link></button>
                            :
                            <button><Link to='/login'>Login</Link></button>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost text-2xl uppercase logo">
                    <h2 className="logo">Bristo Boss <br /> <span className="text-[15px] restaurant">rastaurant</span></h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className={`nav-item ${selectedItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}><Link to='/'>Home</Link></li>
                    <li className={`nav-item ${selectedItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}><Link to='/menu'>Menu</Link></li>
                    <li className={`nav-item ${selectedItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}><Link to='/shop/Salads'>Shop</Link></li>
                    {user ?
                        <><button onClick={handleLogOut} className='mx-2'><Link>Logout</Link></button><span><a className="btn">hi</a></span></>
                        :
                        <button><Link to='/login'>Login</Link></button>
                    }
                </ul>
            </div>
            <div className="navbar-end h-12 w-12 rounded-full ms-3">

            </div>
        </div>
    );
};

export default Navbar;      