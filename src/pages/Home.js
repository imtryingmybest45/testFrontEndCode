import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, useLocation} from 'react-router-dom';
import boolizardprev12 from './boolizardprev12.png';
//import stopLizard from './stopLizard.png'
//{lizardVar && <img src = 'https://media.tenor.com/MI5DzBmG4V8AAAAM/tom-lizard.gif'/>}

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

function Home(props){

    let setUsersApp = props.setUsersApp;
    let setInfo = props.setInfo;
    //const [users, setUsers] = useState({}); // 1. Initialize empty array
    const [users,setUsers] = usePersistedState('userState',{});
    //const [sortedEntries, setSortedEntries] = useState([]);
    const [sortedEntries, setSortedEntries] = usePersistedState('sortedState',[]);
    const location = useLocation();
    //const [lizardVar, setLizardVar] = usePersistedState('lizard',true);
    const [lizardVar, setLizardVar] = usePersistedState('lizard',true);

    useEffect(()=>{
      if (Object.keys(users).length>0){
        const sortedEntries = Object.entries(users).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
        setSortedEntries(sortedEntries)
        setLizardVar(false);
      }
      setUsersApp(users);
      localStorage.setItem('allData',JSON.stringify(users));
    },[users])

    useEffect(() => {
      if (typeof location.initVar === 'undefined'){
        location.initVar = true;
        sessionStorage.refreshVar = false; //added now
        //axios.get('http://localhost:8080/submitEndpoint')
        axios.get('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/submitEndpoint')
        .then(response => setUsers(({...response.data})))
        //.then(setLizardVar(false));
      }
    }, []);

    const logClick = (value) => {
      setInfo(value)
    };

    return (
    <div>
      <h1>Welcome to my website.</h1>
      {lizardVar && <p>Loading...</p>}
      {!lizardVar && <img src={boolizardprev12} alt="This is a lizard that says BOO" />}
      {!lizardVar && <p>This is where I review horror movies.</p>}
      {!lizardVar && <p>Click on a movie name to see the review.</p>}
      {lizardVar&&<img src = 'https://media.tenor.com/MI5DzBmG4V8AAAAM/tom-lizard.gif'/>}
      <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
        {sortedEntries.map(([key,value])=><li key={value.movieId}><Link key={value.movieId} to={'/TesterPage'} onClick={()=>logClick(value)}>{value.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default Home;