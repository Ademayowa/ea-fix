import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { user } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading } = useSelector((state) => state.auth);

  const { first_name: firstName } = user.data;

  return (
    <section className='bg-[#fbfdff] h-screen'>
      <div className='md:9/12 md:ml-40 lg:ml-60 lg:px-4 pt-10 pb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />

          {/* Trainer dashboard */}
          <div className='px-2'>
            <div>
              <h2 className='text-xl md:text-3xl font-bold mb-1'>
                Hi, {firstName}
              </h2>
              <p className='text-lg md:text-[32px] text-center -mb-2 mt-5'>
                Lets Help you get started
              </p>
            </div>

            <div className='flex space-x-3 mt-5 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-stone-300'>
              {/* Loop over later */}
              <div
                className='flex grow py-10 px-4 rounded-lg bg-[#E8F2FE] 
              cursor-pointer'
              >
                <div className='flex flex-col flex-1'>
                  <h2 className='text-sm md:text-[15px] font-bold'>
                    Create Course
                  </h2>
                  <p className='text-[12px] text-gray-500 mt-1'>
                    Click here to get started
                  </p>
                </div>

                <div>
                  <img
                    className='logo-img'
                    src='https://res.cloudinary.com/dpxs9ause/image/upload/v1652981099/ea-kazi/job_lxef9h.png'
                    alt='trainer-course'
                  />
                </div>
              </div>

              <div
                className='flex grow py-10 px-4 rounded-lg bg-[#E8F2FE] 
              cursor-pointer'
              >
                <div className='flex flex-col flex-1'>
                  <h2 className='text-sm md:text-[15px] font-bold'>
                    Create Certification Exam
                  </h2>
                  <p className='text-[12px] text-gray-500 mt-1'>
                    Click here to get started
                  </p>
                </div>

                <div>
                  <img
                    className='logo-img'
                    src='https://res.cloudinary.com/dpxs9ause/image/upload/v1652981099/ea-kazi/job_lxef9h.png'
                    alt='trainer-course'
                  />
                </div>
              </div>

              <div
                className='flex grow py-10 px-4 rounded-lg bg-[#E8F2FE] 
              cursor-pointer'
              >
                <div className='flex flex-col flex-1'>
                  <h2 className='text-sm md:text-[15px] font-bold'>
                    Post a Job
                  </h2>
                  <p className='text-[12px] text-gray-500 mt-1'>
                    Click here to get started
                  </p>
                </div>

                <div>
                  <img
                    className='logo-img'
                    src='https://res.cloudinary.com/dpxs9ause/image/upload/v1652981099/ea-kazi/job_lxef9h.png'
                    alt='trainer-course'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
