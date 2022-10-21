import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Trainer from './pages/trainer';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            <Route path='/trainer' element={<PrivateRoute />}>
              <Route path='/trainer' element={<Trainer />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
