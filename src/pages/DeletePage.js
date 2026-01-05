import {useState} from 'react';
import axios from 'axios';

function DeletePage(props){
    let {linksData} = props;
    const [tfTitle,setTFTitle] = useState(false);
    const [tfButton,setTFButton] = useState(false);
    const [movieName, setMovieName] = useState('');
    const [mess,setMess] = useState('');
    const handleClick = (movieName,setMovieName) => {
        setTFTitle(true);
        setTFButton(true);
        setMess("Are you sure you want to delete "+movieName+"?");
        setMovieName(movieName);
    }

    const yesClick = () => {
        setTFButton(false);
        setMess("Please wait, your request is pending.");
        //axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/deleteEndpoint',movieName)
        axios.post('http://localhost:8080/deleteEndpoint',movieName)
        .then(response => setMess(response.data))
    }

    const noClick = () => {
        setTFTitle(false);
        setTFButton(false);
    }

    return(
        <div>
            {!tfTitle && <h1>This is the delete page.</h1>}
            {!tfTitle && <p>Pick a movie to delete.</p>}
            {!tfTitle && <nav>
                <ul className = "delStuff" style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
                    {linksData.map((link) => (
                    <li key={link.id}>
                        <button onClick = {()=>handleClick(link.text, setMovieName)}>{link.text}</button>
                    </li>
                    ))}
                </ul>
            </nav>}
            {tfTitle && <p>{mess}</p>}
            {tfButton && <div className='bbuton'>
                <button onClick = {yesClick}>Yes</button>
                <button onClick = {noClick}>No</button>
            </div>}
        </div>
    );
}

export default DeletePage