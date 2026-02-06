import Home from './pages/Home';
import Admin from './pages/Admin';
import EditPage from './pages/EditPage';
import SubmissionPage from './pages/SubmissionPage';
import OptionsPage from './pages/OptionsPage';
import DeletePage from './pages/DeletePage';
import Accolades from './pages/AccoladesPage';
import TierList from './pages/TierList';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';
import './App.css'

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

function App(){

  const [ranVar, settfVar] = useState(true);
  const [prevPath, setPrevPath] = usePersistedState('pathname',window.location.pathname);
  const [links, setLinks] = usePersistedState('linkNames',[{id: "hello"},{id: "goodbye"}]);
  const [origMovName, setOrigMovName] = useState('');

  const userData = {name: ranVar, age: settfVar, prevPath: prevPath, setPrevPath: setPrevPath};

  const homeClick = () => {
    sessionStorage.removeItem('movInfo')
    sessionStorage.removeItem('submitMovInfo')
    settfVar(true)
  }

  const adminClick = () => {
    sessionStorage.removeItem('movInfo')
    sessionStorage.removeItem('submitMovInfo')
  }

  const handlePageLoad = () => {
    if (window.location.pathname === "/" || window.location.pathname === "/*"){
      settfVar(true);
    }
    else{
      settfVar(false);
    }
  };

  const handleBackButton = (event) => {
    if (window.location.pathname === "/" || window.location.pathname === "/*"){
      settfVar(true);
    }
    else{
      settfVar(false);
    }
  };

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []); // Empty dependency array ensures this runs once on mount/unmount

  useEffect(() => {
    handlePageLoad();
  },[]); // The empty dependency array ensures this runs only once

  return (
    <div>
      <nav className="top-left-div">
        <Link to='*' onClick={homeClick}>Home</Link>
        <Link to='/Admin' onClick={adminClick}>Admin</Link>
        <Link to='/TierList' onClick={adminClick}>Tier List</Link>
        <Link to='/Accolades' onClick={adminClick}>Accolades</Link>
      </nav>
      <Routes>
        <Route path="*" element={<Home {...userData} linksStuff={setLinks} origMovName={origMovName}/>} />
        <Route path ="/Admin" element={<Admin />}/>
        <Route path ="/Accolades" element={<Accolades />}/>
        <Route path ="/TierList" element={<TierList />}/>
        <Route path ="/SubmissionPage" element={<SubmissionPage />}/>
        <Route path ="/DeletePage" element={<DeletePage linksData={links}/>}/>
        <Route path ="/EditPage" element={<EditPage {...userData} linksData={links} setOrigMovName={setOrigMovName}/>}/>
        <Route path ="/OptionsPage" element={<OptionsPage />}/>
      </Routes>
    </div>
  );
}

export default App