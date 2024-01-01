import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";
import '././css/ Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';


const Navbar = () => {
    const { user, logOut } = useContext(authContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => { console.log(error.message) })
    }

    return (
        <div className="navbar bg-black text-white fixed z-10 max-w-screen-xl mx-auto bg-opacity-60">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/shop/Salads'>Shop</Link></li>
                        <li>
                            <Link to='/dashboard/mycart'>
                                <button className="btn text-xl bg-transparent text-white border-none">
                                    <span><FaShoppingCart></FaShoppingCart></span>
                                    <div className="badge badge-secondary">+{cart.length}</div>
                                </button>
                            </Link>
                        </li>
                        <li>{user ?
                            <><button onClick={handleLogOut}><Link>Logout</Link></button><span><img className="h-12 w-12 rounded-full border-2" src={user.photoURL} alt="" /></span></>
                            :
                            <button><Link to='/login'>Login</Link></button>
                        }</li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-2xl uppercase logo">
                    <h2 className="logo">Bristo Boss <br /> <span className="text-[15px] restaurant">rastaurant</span></h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/shop/Salads'>Shop</Link></li>
                    <li>
                        <Link to='/dashboard/mycart'>
                            <button className="btn text-xl bg-transparent text-white border-none">
                                <span><FaShoppingCart></FaShoppingCart></span>
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </button>
                        </Link>
                    </li>
                    <li>
                        {user ?
                            <span><button onClick={handleLogOut} className='mx-2'><Link>Logout</Link></button><img className="h-12 w-12 rounded-full border-2" src={user.photoURL} alt="" /></span>
                            :
                            <button><Link to='/login'>Login</Link></button>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;