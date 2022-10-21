import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';
import { BiHome, BiWallet, BiBell, BiUser, BiPowerOff } from 'react-icons/bi';
import SidebarLink from '../SidebarLink';
import Logo from '../../img/logo1.png';

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div className='tracking-wide w-full md:w-1/6 text-black font-medium px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen border border-r-1 z-50 bg-white'>
      <div className='flex flex-row justify-between md:flex-col md:relative md:px-4 items-center md:items-start'>
        <div className='hidden md:inline-flex ml-5 mb-1 cursor-pointer'>
          <Link to='#'>
            <img className='logo-img' src={Logo} alt='logo' />
          </Link>
        </div>
        <Link to='#'>
          <SidebarLink text='Home' Icon={BiHome} />
        </Link>
        <Link to='#'>
          <SidebarLink text='Wallet' Icon={BiWallet} />
        </Link>
        <Link to='#'>
          <SidebarLink text='Alerts' Icon={BiBell} />
        </Link>
        <Link to='/profile'>
          <SidebarLink text='Profile' Icon={BiUser} />
        </Link>
        <button onClick={onLogout}>
          <SidebarLink text='Logout' Icon={BiPowerOff} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
