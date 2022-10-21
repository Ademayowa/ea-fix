import { useNavigate } from 'react-router-dom';

function SidebarLink({ Icon, text, active }) {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center text-xs md:text-base flex-col sm:flex-col  md:flex-row md:space-x-4 px-4 py-5 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-200 group ${
        active && 'text-blueColor hover:bg-gray-100'
      }`}
      onClick={() => active && navigate('/')}
    >
      <Icon className='h-6 w-6 sm:text-center text-gray-600 md:text-blueColor' />
      <p className='md:hidden lg:inline-flex text-gray-600  group-hover:text-blueColor'>
        {text}
      </p>
    </div>
  );
}

export default SidebarLink;
