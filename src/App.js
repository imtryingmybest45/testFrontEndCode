import Home from './pages/Home';
import Admin from './pages/Admin';
import SubmissionPage from './pages/SubmissionPage';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './App.css'

function App(){
  const [ranVar, settfVar] = useState(true);
  const userData = {name: ranVar, age: settfVar};
  const homeClick = () => {
    settfVar(true)
    console.log("hello");
  }
  return (
    <div>
      <nav className="top-left-div">
        <Link to='*' onClick={homeClick}>Home</Link>
        <Link to='/Admin'>Admin</Link>
      </nav>
      <Routes>
        <Route path="*" element={<Home {...userData}/>} />
        <Route path ="/Admin" element={<Admin />}/>
        <Route path ="/SubmissionPage" element={<SubmissionPage />}/>
      </Routes>
    </div>
  );
}

export default App