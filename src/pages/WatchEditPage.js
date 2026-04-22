import {useState,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import "../App.css"

function WatchEditPage(props){

    let setWatchInfo = props.setWatchInfo;
    const [users, setUsers] = useState({}); // 1. Initialize empty array
    const [sortedEntries, setSortedEntries] = useState([]);
    const location = useLocation();

    useEffect(()=>{
      if (Object.keys(users).length>0){
        const sortedEntries = Object.entries(users).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
        setSortedEntries(sortedEntries)
      }
    },[users])

    useEffect(() => {
      if (typeof location.initVar === 'undefined'){
        location.initVar = true;
        //axios.get('http://localhost:8080/watchEndpoint')
        axios.get('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/watchEndpoint')
        .then(response => setUsers(({...response.data})))
      }
    }, []);

    const logClick = (value) => {
        localStorage.setItem('watchInitVar',false);
        //set local storage to session storage for editVar
        localStorage.setItem('watchEditVar',true);
        setWatchInfo(value);
    };

    return (
    <div>
      <h1>This is the edit page.</h1>
      <p>Click on the movie you would like to edit.</p>
      <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
        {sortedEntries.map(([key,value])=><li key={value.movieId}><Link key={value.movieId} to={'/WatchSubmissionPage'} onClick={()=>logClick(value)}>{value.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default WatchEditPage;