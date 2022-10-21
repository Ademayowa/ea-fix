import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getTrainer, reset } from '../../features/trainer/trainerSlice';
import Spinner from '../../components/Spinner';
import Sidebar from '../../components/Sidebar';

function Trainer() {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.trainer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTrainer());
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className='bg-[#fbfdff] h-screen'>
      <div className='md:9/12 md:ml-40 lg:ml-60 lg:px-4 pt-10 pb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />

          <div className='px-2'>
            <h2 className='text-2xl'>Trainer Dashboard</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainer;
