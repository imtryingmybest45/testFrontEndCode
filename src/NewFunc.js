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

function NewFunc(props){

    const origMovName = props.origMovName;
    const movName = "Insert movie name here";
    const movVal = "Insert movie review here";

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
        //axios.post('https://tryingthisagain-e6f8d0gqfmgsevft.eastus2-01.azurewebsites.net/genericEndpoint123',formData)
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
            {varVar && <pre>{movVal}</pre>}
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

export default NewFunc;