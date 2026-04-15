import {useState,useLayoutEffect,useRef,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "../App.css"

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

function SubmissionPage(props){
    
    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const location = useLocation();
    let usersApp = props.usersApp;

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto'; // Reset width to calculate actual content width
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        }
    }, [value]); // Re-run when the value changes

    const [stvar, setMess] = useState('');
    const [formData, setFormData] = usePersistedState("submitMovInfo",{
        movieName: '',
        movieReview: '',
        movieTier: '',
        movieYear: '',
        movieRating: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior (page reload)
        const allowedStrings = ['S', 'A', 'B', 'C', 'D', 'F', 'NO'];
        if (!allowedStrings.includes(formData.movieTier)){
            setMess("Can only input S, A, B, C, D, F, or NO.")
        }
        else{
            setMess("Please wait, your review is loading.");
            if (localStorage.editVar!=="true"){
                axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/addEndpoint',formData)
                //axios.post('http://localhost:8080/addEndpoint',formData)
                .then(response => setMess(response.data))
            }
            else{
                axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/editEndpoint',formData)
                //axios.post('http://localhost:8080/editEndpoint',formData)
                .then(response => setMess(response.data))
                localStorage.setItem('editVar',false);
            }
        }
    };

    useEffect(() => {
        if (localStorage.lastPath === '/Options'){
            setFormData({movieName: '', movieReview: '', movieTier: '', movieYear: '',movieRating: ''});
            localStorage.setItem('lastPath', location.pathname);
        }
        if (localStorage.initVar==='false'){
            localStorage.setItem('initVar',true);
            if (typeof usersApp.name !== 'undefined'){
                setFormData({movieName: props.usersApp.name, movieReview: props.usersApp.review, movieTier: props.usersApp.tier, movieYear: props.usersApp.year, movieRating: props.usersApp.rating})
            }
        }
    }, []);

      return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="links1">
                    Movie Name:
                    <textarea className = "custom-input" type="text" ref={inputRef} name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Input movie name" />
                </label>
                <label className="links1">
                    Release Year:
                    <textarea className = "custom-input" type="text" ref={inputRef4} name="movieYear" value={formData.movieYear} onChange={handleChange} placeholder="Input release year" />
                </label>
                 <label className="links1">
                    Rating:
                    <textarea className = "custom-input" type="text" ref={inputRef5} name="movieRating" value={formData.movieRating} onChange={handleChange} placeholder="Input movie rating (out of 10)" />
                </label>
                <label className="links1">
                    Tier:
                    <textarea className = "custom-input" type="text" ref={inputRef3} name="movieTier" value={formData.movieTier} onChange={handleChange} placeholder="Input movie tier" />
                </label>
                <label className="links2">
                    Movie Review:
                    <textarea className = "custom-input2" type="text" ref={inputRef2} name="movieReview" value={formData.movieReview} onChange={handleChange} placeholder="Write movie review here"/>
                </label>
                <button type="submit">Submit</button>
                <p>{stvar}</p>
            </form>
        </div>
      );
    }

export default SubmissionPage;
