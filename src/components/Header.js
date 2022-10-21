import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../img/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const [nav, setNav] = useState(false);
  const [shadow] = useState(false);
  const [linkColor] = useState('#0C1825');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className={
        shadow
          ? 'sticky w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'sticky w-full h-20 z-[100] shadow-sm bg-white'
      }
    >
      <div className='flex justify-between items-center w-full h-full md:px-10'>
        <Link to='/'>
          <img src={Logo} alt='logo' className='cursor-pointer logo-img1' />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className='hidden md:flex font-medium pr-20 pt-4'
          >
            {/* If user logged in */}
            {user ? (
              <>
                <li className='ml-10'>
                  <button
                    onClick={onLogout}
                    className='bg-[#4086F4] text-white text-[15px] font-semibold py-2.5 px-6 rounded transition duration-1000 ease-in-out
                hover:bg-[#2f68c2] transform hover:text-white hover:scale-120'
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* If user logged out */}
                <li className='ml-10 text-base hover:border-b'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='ml-10 text-base hover:border-b'>
                  <Link to='#'>Jobs</Link>
                </li>
                <li className='ml-10'>
                  <Link
                    to='/login'
                    className='bg-[#4086F4] text-white text-[15px] font-semibold py-2.5 px-6 rounded transition duration-1000 ease-in-out
                hover:bg-[#2f68c2] transform hover:text-white hover:scale-120'
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden cursor-pointer pr-16'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link to='/'>
                <img src={Logo} alt='logo' />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul style={{ color: `${linkColor}` }}>
              <Link to='/'>
                <li onClick={() => setNav(false)} className='py-4 text-base'>
                  Home
                </li>
              </Link>
              <Link to='#'>
                <li onClick={() => setNav(false)} className='py-4 text-base'>
                  Jobs
                </li>
              </Link>
              <Link to='#'>
                <li onClick={() => setNav(false)} className='py-4 text-base'>
                  Courses
                </li>
              </Link>
              <Link to='#'>
                <li onClick={() => setNav(false)} className='py-4 text-base'>
                  Contact
                </li>
              </Link>
              <Link to='#'>
                <li onClick={() => setNav(false)} className='py-4 text-base'>
                  FAQ
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
