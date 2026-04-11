import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
//import stopLizard from './stopLizard.png'

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

function WatchPage(props){

    const [watchUsers,setWatchUsers] = usePersistedState('watchUserState',{});
    const [watchSortedEntries, setWatchSortedEntries] = usePersistedState('watchSortedState',[]);
    let setWatchInfo = props.setWatchInfo;
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
      if (Object.keys(watchUsers).length>0){
        const watchSortedEntries = Object.entries(watchUsers).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
        setWatchSortedEntries(watchSortedEntries)
      }
      //setUsersApp(users);
      //localStorage.setItem('allData',JSON.stringify(users));
    },[watchUsers])

    useEffect(() => {
      if (typeof location.watchInitVar === 'undefined'){
        location.watchInitVar = true;
        //sessionStorage.refreshVar = false; //added now
        //axios.get('http://localhost:8080/watchEndpoint')
        axios.get('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/watchEndpoint')
        .then(response => setWatchUsers(({...response.data})))
      }
    }, []);

    const logClick = (value) => {
      setWatchInfo(value)
    };

    const buttonClick = () => {
      navigate('/WatchSubmissionPage')
    };

    const buttonClick2 = () => {
        navigate("/WatchDeletePage");
    };

    return (
    <div>
      <h1>Welcome to the watchlist page.</h1>
      <p>This is where you can list movies you want to watch.</p>
      <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
        {watchSortedEntries.map(([key,value])=><li key={value.name}><Link key={value.name} to={'/WatchTesterPage'} onClick={()=>logClick(value)}>{value.name}</Link></li>)}
      </ul>
      <div className="watchButton">
        <button onClick={buttonClick}>Add movie</button>
        <button onClick={buttonClick2}>Delete movie</button>
    </div>
    </div>
  );
}

export default WatchPage;