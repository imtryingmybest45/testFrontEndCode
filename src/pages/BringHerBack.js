import {useEffect} from 'react';
import {useState,useLayoutEffect,useRef} from 'react';
import axios from 'axios';

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

function BringHerBack(props){

    const origMovName = props.origMovName;
    const movName = "Bring Her Back";
    const movVal = "Release Date: 2025\n\nRating: 7/10\n\nVery freaky movie, would watch again.";

    const [varVar, setVarVar] = useState(true);
    let prevPath = props.name;

    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const specialCharsRegex = /[^a-zA-Z0-9\s]/;

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto'; // Reset width to calculate actual content width
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        }
    }, [value]); // Re-run when the value changes

    const [stvar, setMess] = useState('');
    const [formData, setFormData] = usePersistedState("movInfo",{
        movieName: movName,
        movieReview: movVal,
        origMovName: origMovName,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior (page reload)
        if (specialCharsRegex.test(formData.movieName)){
            setMess("Movie name cannot contain non-alphanumeric characters.")
        }
        else if(/^[a-z]/.test(formData.movieName)){
            setMess("First word of movie name must be uppercase.")
        }
        else{
        setMess("Please wait, your review is loading.");
        axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/editEndpoint',formData)
        //axios.post('http://localhost:8080/editEndpoint',formData)
        .then(response => setMess(response.data))
        }
    };

     useEffect(() => {
    const handlePageLoad = (prevPath) => {
        if (prevPath === "/EditPage"){
            setVarVar(false);
        }
        else{
            setVarVar(true);
        }
    };

    handlePageLoad(prevPath);
  },[prevPath]); // The empty dependency array ensures this runs only once

    return(
        <div>
            {varVar && <h1>{movName}</h1>}
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
            {varVar && <pre className = "paragraphStylin">{movVal}</pre>}
            {!varVar &&<form onSubmit={handleSubmit}>
                <label className="linkss">
                    Movie Name:
                    <textarea className = "custom-input" type="text" ref={inputRef} name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Input movie name" />
                </label>
                <label className="linkss2">
                    Movie Review:
                    <textarea className = "customInp" type="text" ref={inputRef2} name="movieReview" value={formData.movieReview} onChange={handleChange} placeholder="Write movie review here"/>
                </label>
                <button type="submit">Submit</button>
                <p>{stvar}</p>
            </form>}
        </div>
    )
}

export default BringHerBack;