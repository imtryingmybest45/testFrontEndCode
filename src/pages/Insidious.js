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

function Insidious(props){

    const origMovName = props.origMovName;
    const movName = "Insidious";
    const movVal = "Release Date: 2011\n\nRating: 8.5/10\n\nOne of the most iconic horror movies of the 2010s, Insidious's debut hooked audiences and kicked off a multimillion dollar franchise. And for good reason; this movie's concept was not one yet seen in any major supernatural film until now. While most supernatural films keep a firm barrier between the worlds of the living and the dead, Wan blurs this barrier, allowing those who are living to cross into the spirit realm and the dead to cross into our world. This journey is accomplished via astral projection, a unique ability that can allow one to leave their physical body and enter the spirit realm. This unique gift is given to the film's main protagonist, a small child named Dalton, and it is this gift that is the initial catalyst for all of the spiritual attacks on the Lambert family.\n\nThe movie begins similar to many other supernatural movies; we see the innocent, happy Lambert family moving into their new house. It's clear they are excited about their new beginning, especially their youngest son, Dalton, who is eager to explore every nook and cranny in the new house. His unabashed bravery and naive lack of caution, while endearing, soon put him in danger when he starts exploring places he's not supposed to go. We first see a less extreme instance of this when Dalton, while exploring the attic, falls off a ladder and hits his head. Obviously, this startles his worried parents, but he soon gets it up and shakes it off, and we think nothing more of it.";

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
        //axios.post('https://tryingthisagain-e6f8d0gqfmgsevft.eastus2-01.azurewebsites.net/editEndpoint',formData)
        axios.post('http://localhost:8080/editEndpoint',formData)
        .then(response => setMess(response.data))
        }
    };

    const handlePageLoad = () => {
        if (prevPath === "/EditPage"){
            setVarVar(false);
        }
        else{
            setVarVar(true);
        }
    };

  useEffect(() => {
    handlePageLoad();
  },[]); // The empty dependency array ensures this runs only once

    return(
        <div>
            {varVar && <h1>{movName}</h1>}
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

export default Insidious;