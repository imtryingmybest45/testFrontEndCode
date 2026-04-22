import {useState,useLayoutEffect,useRef,useEffect} from 'react';
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

function WatchSubmissionPage(props){
    
    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef4 = useRef(null);
    let watchInfo = props.watchInfo;

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto'; // Reset width to calculate actual content width
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        }
    }, [value]); // Re-run when the value changes

    const [stvar, setMess] = useState('');
    const [watchFormData, setWatchFormData] = usePersistedState('wowow',{
        movieName: '',
        movieBlurb: '',
        movieYear: '',
        movieId: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWatchFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior (page reload)
        setMess("Please wait, your watch recommendation is loading.");
        if (localStorage.watchEditVar !== "true"){
            axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/watchSubEndpoint',watchFormData)
            //axios.post('http://localhost:8080/watchSubEndpoint',watchFormData)
            .then(response => setMess(response.data))
        }
        else{
            axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/watchEditEndpoint',watchFormData)
                //axios.post('http://localhost:8080/watchEditEndpoint',watchFormData)
                .then(response => setMess(response.data))
                localStorage.setItem('watchEditVar',false);
        }
        };

    useEffect(() => {
        if (localStorage.lastWatchPath === '/WatchList'){
            setWatchFormData({movieName: '', movieBlurb: '', movieYear: ''});
            localStorage.setItem('lastWatchPath', location.pathname);
        }
        if (localStorage.watchInitVar==='false'){
            localStorage.setItem('watchInitVar',true);
            if (typeof watchInfo.name !== 'undefined'){
                setWatchFormData({movieName: watchInfo.name, movieBlurb: watchInfo.blurb, movieYear: watchInfo.year, movieId: watchInfo.movieId})
            }
        }
    }, []);

      return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="links1">
                    Movie Name:
                    <textarea className = "custom-input" type="text" ref={inputRef} name="movieName" value={watchFormData.movieName} onChange={handleChange} placeholder="Input movie name" />
                </label>
                <label className="links1">
                    Release Year (Optional):
                    <textarea className = "custom-input" type="text" ref={inputRef4} name="movieYear" value={watchFormData.movieYear} onChange={handleChange} placeholder="Input release year" />
                </label>
                <label className="links3">
                    Movie Blurb:
                    <textarea className = "custom-input3" type="text" ref={inputRef2} name="movieBlurb" value={watchFormData.movieBlurb} onChange={handleChange} placeholder="Write movie review here"/>
                </label>
                <button type="submit">Submit</button>
                <p>{stvar}</p>
            </form>
        </div>
      );
    }


export default WatchSubmissionPage