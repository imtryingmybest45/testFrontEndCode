import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, useLocation} from 'react-router-dom';
import boolizardprev12 from './boolizardprev12.png';
//import stopLizard from './stopLizard.png'

function Home(props){

    let setUsersApp = props.setUsersApp;
    let setInfo = props.setInfo;
    const [users, setUsers] = useState({}); // 1. Initialize empty array
    const [sortedEntries, setSortedEntries] = useState([]);
    const location = useLocation();

    useEffect(()=>{
      if (Object.keys(users).length>0){
      const sortedEntries = Object.entries(users).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
      setSortedEntries(sortedEntries)}
      setUsersApp(users);
      localStorage.setItem('allData',JSON.stringify(users));
    },[users])

    useEffect(() => {
      if (typeof location.initVar === 'undefined'){
      location.initVar = true;
      //axios.get('http://localhost:8080/submitEndpoint')
      axios.get('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/submitEndpoint')
      .then(response => setUsers(({...response.data})))
      }
    }, []);

    const logClick = (value) => {
      setInfo(value)
    };

    return (
    <div>
      <h1>Welcome to my website.</h1>
      <img src={boolizardprev12} alt="This is a lizard that says BOO" />
      <p>This is where I review horror movies.</p>
      <p>Click on a movie name to see the review.</p>
      <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
        {sortedEntries.map(([key,value])=><li key={value.movieId}><Link key={value.movieId} to={'/TesterPage'} onClick={()=>logClick(value)}>{value.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default Home;