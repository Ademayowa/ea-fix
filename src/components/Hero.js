import { Link } from 'react-router-dom';
import Bid from '../img/bid1.png';
import Cert from '../img/cert1.png';
import Cross from '../img/cross.png';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../variants';

function Hero() {
  return (
    <div className='flex px-3 md:px-10 relative min-h-screen bg-white'>
      <motion.div
        variants={fadeIn()}
        initial='initial'
        animate='animate'
        className='flex-auto w-64'
      >
        <h1 className='font-bold text-[#0C1825] text-4xl md:text-[64px] leading-tight mt-10 md:mt-20'>
          Get trained and certified by <br /> Experts.
        </h1>
        <p className='font-normal text-[#353535] text-[17px] leading-8 md:w-96 lg:w-4/5 mt-3'>
          Freelancers can bid for jobs after acquiring the required skillset and
          certifications.
        </p>

        <div className='mt-5'>
          <Link
            to='/register'
            className='bg-[#4086F4] text-white text-[15px] font-semibold py-3.5 px-8 rounded transition duration-1000 ease-in-out
            hover:bg-[#2f68c2] transform hover:text-white hover:scale-120'
          >
            Get Started
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp()}
        initial='initial'
        animate='animate'
        className='flex-auto w-64 h-80 lg: -m-[75px] hidden xg:block mt-1'
      >
        <img
          src='https://res.cloudinary.com/dpxs9ause/image/upload/v1658583398/ea-kazi/male_rfrfjy.png'
          alt='hero-img'
          className='mt-8 lg:ml-40'
        />
      </motion.div>

      <motion.div
        variants={fadeUp()}
        initial='initial'
        animate='animate'
        className='mt-10 min-h-screen hidden xg:block'
      >
        <img
          src={Bid}
          alt='bid-jobs'
          className='absolute right-0 top-80 mt-28'
        />
        <img
          src={Cert}
          alt='certifications '
          className='absolute right-56 top-44'
        />
        <img src={Cross} alt='cross-img' className='absolute right-60 top-20' />
      </motion.div>
    </div>
  );
}

export default Hero;
