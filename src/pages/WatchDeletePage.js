import {useState,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import "../App.css"

function WatchDeletePage(){

    const [movie, setMovie] = useState('');
    const [users, setUsers] = useState({}); // 1. Initialize empty array
    const [sortedEntries, setSortedEntries] = useState([]);
    const [mess, setMess] = useState('');
    const [tfTitle,setTFTitle] = useState(false);
    const [tfButton,setTFButton] = useState(false);
    const location = useLocation();

    const handleClick = (value) => {
        setTFTitle(true);
        setTFButton(true);
        setMess("Are you sure you want to delete "+value.name+"?");
        setMovie(value.name)
    }

    const noClick = () => {
        setTFTitle(false);
        setTFButton(false);
    }

    const yesClick = (movie) => {
        setTFButton(false);
        localStorage.setItem('initVar',false);
        setMess("Please wait, your request is pending.");
        //axios.post('http://localhost:8080/watchDeleteEndpoint',movie)
        axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/watchDeleteEndpoint',movie)
        .then(response => setMess(response.data))
    };

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

    return (
    <div>
      {!tfTitle && <h1>This is the watchlist delete page.</h1>}
      {!tfTitle && <p>Pick a movie to delete from watchlist.</p>}
      {!tfTitle && <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
        {sortedEntries.map(([key,value])=><li key={value.movieId}><Link key={value.movieId} to={'/WatchDeletePage'} onClick={()=>handleClick(value)}>{value.name}</Link></li>)}
      </ul>}
      {tfTitle && <p>{mess}</p>}
        {tfButton && <div className='buttonClass'>
            <button onClick = {()=>yesClick(movie)}>Yes</button>
            <button onClick = {noClick}>No</button>
        </div>}
    </div>
  );
}

export default WatchDeletePage;