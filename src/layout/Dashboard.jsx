
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaWallet, FaShoppingCart, FaClipboardCheck, FaShoppingBag } from "react-icons/fa";
import { FaRankingStar,FaBars } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SectionTitle from '../components/SectionTitle';


const Dashboard = () => {
    return (
        <>
            <div className="flex w-full max-h-screen">
                <div className="w-[20%] bg-[#D1A054] cart-side">
                    <NavLink className="btn btn-ghost uppercase logo my-6 text-left">
                        <h2 className="logo">Bristo Boss <br /> <span className="text-[15px] restaurant">rastaurant</span></h2>
                    </NavLink>
                    <ul className='mx-2 my-4'>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='/' className='flex items-center'><span className='px-2'><FaHome></FaHome> </span> Home</NavLink></li>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='reservation' className='flex items-center'><span className='px-2'><FaCalendarAlt></FaCalendarAlt> </span> Reservation</NavLink></li>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='payment' className='flex items-center'><span className='px-2'><FaWallet></FaWallet> </span> Payment History</NavLink></li>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='mycart' className='flex items-center'><span className='px-2'><FaShoppingCart></FaShoppingCart> </span> MyCart</NavLink></li>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='review' className='flex items-center'><span className='px-2'><FaRankingStar></FaRankingStar> </span> Add Review</NavLink></li>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='booking' className='flex items-center'><span className='px-2'><FaClipboardCheck></FaClipboardCheck> </span> My Booking</NavLink></li>
                        <div className="divider text-red-500"></div>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='/' className='flex items-center'><span className='px-2'><FaHome></FaHome> </span> Home</NavLink></li>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='/menu' className='flex items-center'><span className='px-2'><FaBars></FaBars> </span> Menu</NavLink></li>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='/shop' className='flex items-center'><span className='px-2'><FaShoppingBag></FaShoppingBag> </span> Shop</NavLink></li>
                        <li className='py-2 hover:bg-slate-500 hover:text-white'><NavLink to='/contact' className='flex items-center'><span className='px-2'><MdEmail></MdEmail> </span> Contact</NavLink></li>
                    </ul>
                </div>
                <div className='p-2'>
                    <SectionTitle
                    subHeading='Cart'
                    heading='Wonna Add More??'
                    ></SectionTitle>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

