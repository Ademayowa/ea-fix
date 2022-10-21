import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaSpinner } from 'react-icons/fa';
import Logo from '../img/logo1.png';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Pesrsist user data
    if (user || isSuccess) {
      navigate('/trainer');
    }

    // Checks if there is an error when user login
    if (isError) {
      toast.error(message);
    }

    // Clear error message on successful login
    dispatch(reset());
  }, [isSuccess, isError, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex justify-center text-center mx-auto bg-[#FBFDFF] h-screen'
    >
      {/* Animation Library */}
      <motion.div
        variants={fadeIn()}
        initial='initial'
        animate='animate'
        className='py-8 px-10 rounded-lg shadow-lg w-11/12 md:w-6/12 lg:w-4/12 bg-white mt-16 h-fit'
      >
        <Link to='/'>
          <img src={Logo} alt='logo' className='mx-auto cursor-pointer' />
        </Link>
        <h5 className='text-[28px] mt-4 font-bold mb-2'>Sign in</h5>
        <p className='text-[15px] text-[#949494] mb-4'>
          Sign in to into your EA Kazi account
        </p>
        <div className='mt-4 md:mt-6'>
          <input
            className='pl-3 text-base border border-solid border-gray-300 placeholder-gray-600
          rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
            type='email'
            placeholder='Email Address'
            id='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='mt-4 md:mt-6'>
          <input
            className='pl-3 text-base border border-solid border-gray-300 placeholder-gray-600
          rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none bg-[
          #EEF4FF]'
            type='password'
            placeholder='Password'
            id='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        {isLoading ? (
          <button
            disabled
            className='disabled: opacity-40 bg-[#4086F4] shadow-lg w-full text-white px-14 py-3 mt-2 md:mt-4 rounded transition duration-1000 ease-in-out hover:bg-[#2a70ae] transform hover:scale-120'
          >
            <FaSpinner className='animate-spin mx-auto w-6 h-6' />
          </button>
        ) : (
          <button
            className='bg-[#4086F4] shadow-lg w-full text-white px-14 py-3 mt-2 md:mt-4 rounded transition duration-1000 ease-in-out
          hover:bg-[#2f68c2] transform hover:text-white hover:scale-120'
          >
            Login
          </button>
        )}
        <div className='mt-4 text-gray-500'>
          Dont have an account?{' '}
          <Link to='/register' className='text-blueColor'>
            Sign Up
          </Link>
        </div>
      </motion.div>
    </form>
  );
}

export default Login;
