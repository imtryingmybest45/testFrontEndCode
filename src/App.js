import './App.css';
import {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import TesterPage from './pages/TesterPage';
import Home from './pages/Home';
import Admin from './pages/Admin';
import TierList from './pages/TierList';
import Accolades from './pages/Accolades';
import OptionsPage from './pages/OptionsPage'
import SubmissionPage from './pages/SubmissionPage';
import EditPage from './pages/EditPage'
import DeletePage from './pages/DeletePage'

function usePersistedState(key, defaultValue) {
  // Initialize state with value from localStorage if available
  const [state, setState] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function App() {

  const [usersApp, setUsersApp] = usePersistedState("object",{}); // 1. Initialize empty array
  const [info, setInfo] = usePersistedState("object",{});
  const navigate = useNavigate();
  const { location } = window;

  useEffect(() => {
    if (location.pathname === '/'){
      navigate('/Home', { replace: true });
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <nav className="top-left-div">
        <Link to="/Home">Home</Link>
        <Link to="/Admin">Admin</Link>
        <Link to="/TierList">Tier List</Link>
        <Link to="/Accolades">Accolades</Link>
      </nav>
        <Routes>
          <Route path='/Home' element={<Home setUsersApp={setUsersApp} setInfo={setInfo} />}/>
          <Route path='/Admin' element={<Admin />}/>
          <Route path='/TierList' element={<TierList setUsersApp={setUsersApp} usersApp={usersApp} setInfo={setInfo}/>}/>
          <Route path='/Accolades' element={<Accolades />}/>
          <Route path='/Options' element={<OptionsPage setUsersApp={setUsersApp}/>}/>
          <Route path='/Submit' element={<SubmissionPage usersApp={usersApp}/>}/>
          <Route path='/Edit' element={<EditPage setUsersApp={setUsersApp}/>}/>
          <Route path='/Delete' element={<DeletePage />}/>
          <Route path='/TesterPage' element={<TesterPage info={info} />} />
        </Routes>
    </div>
  );
}

export default App;
