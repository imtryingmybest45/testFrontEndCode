import {useState,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import "../App.css"

function EditPage(props){

    let setUsersApp = props.setUsersApp;
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
        //axios.get('http://localhost:8080/submitEndpoint')
        axios.get('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/submitEndpoint')
        .then(response => setUsers(({...response.data})))
      }
    }, []);

    const logClick = (value) => {
        localStorage.setItem('initVar',false);
        localStorage.setItem('editVar',true);
        setUsersApp(value);
    };

    return (
    <div>
      <h1>This is the edit page.</h1>
      <p>Click on the movie you would like to edit.</p>
      <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
        {sortedEntries.map(([key,value])=><li key={value.movieId}><Link key={value.movieId} to={'/Submit'} onClick={()=>logClick(value)}>{value.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default EditPage;