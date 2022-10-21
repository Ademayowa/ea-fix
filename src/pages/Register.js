import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsChevronDown } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import Logo from '../img/logo1.png';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = formData;

  // Dropdown for user role
  const options = ['trainer', 'freelancer'];
  const [userRole, setUserRole] = useState(options[0]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Redirect when user is logged in
    if (isSuccess || user) {
      navigate('/login');
    }

    // Checks if there is an error when user register
    if (isError) {
      toast.error(message);
    }

    // Clear error message on successful register
    dispatch(reset());
  }, [isSuccess, isError, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      user_role: userRole,
      password,
    };

    dispatch(register(userData));
    // console.log(userData);
  };

  return (
    <div className='bg-[#FBFDFF] lg:pb-20'>
      <form
        onSubmit={onSubmit}
        className='flex justify-center text-center mx-auto'
      >
        {/* Animation Library */}
        <motion.div
          variants={fadeIn()}
          initial='initial'
          animate='animate'
          className='py-8 px-10 rounded-lg shadow-lg w-11/12 md:w-6/12 lg:w-4/12 bg-white mt-16'
        >
          <Link to='/'>
            <img src={Logo} alt='logo' className='mx-auto cursor-pointer' />
          </Link>
          <h5 className='text-[28px] mt-4 font-bold mb-2'>Sign up</h5>
          <p className='text-[15px] text-[#949494] mb-4'>
            Sign up to into your EA Kazi account
          </p>

          <div className='mt-4 md:mt-6'>
            <input
              className='pl-3 text-base border border-solid border-gray-300 placeholder-gray-600
            rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
              type='text'
              placeholder='First Name'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={onChange}
            />
          </div>

          <div className='mt-4 md:mt-6'>
            <input
              className='pl-3 text-base border border-solid border-gray-300 placeholder-gray-600
            rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
              type='text'
              placeholder='Last Name'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={onChange}
            />
          </div>

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

          {/* Dropdown for user role  */}
          <div className='mt-4 md:mt-6'>
            <div className='relative'>
              <BsChevronDown className='absolute top-3 md:top-3 right-2 w-5 h-5 text-[#817C8E]' />
            </div>
            <select
              className='form-select form-select-lg mb-3 appearance-none block w-full h-12 px-6 pl-3 py-2 text-base font-normal text-gray-600 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-stone-500 focus:outline-none'
              aria-label='.form-select-lg'
              name='options'
              id=''
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option>Sign up as</option>
              {options.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select>
            {/* <span>You select {userRole}</span> */}
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
              Create an account
            </button>
          )}
          <div className='mt-4 text-gray-500'>
            Already have an account?{' '}
            <Link to='/login' className='text-blueColor'>
              Sign In
            </Link>
          </div>
        </motion.div>
      </form>
    </div>
  );
}

export default Register;
