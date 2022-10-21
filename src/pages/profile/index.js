import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { getTrainer, reset } from '../../features/profile/profileSlice';
import { toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar';

function Profile() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <section className='bg-[#fbfdff] h-screen'>
      <div className='md:9/12 md:ml-40 lg:ml-60 lg:px-4 pt-10 pb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />

          {/* Profile here */}
          <h2>Trainer profile</h2>
        </div>
      </div>
    </section>
  );
}

export default Profile;
