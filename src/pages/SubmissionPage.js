import {useState,useLayoutEffect,useRef} from 'react';
import axios from 'axios';
import "../App.css"

function SubmissionPage(){
    //const [value, setValue] = useState('');
    const value = '';
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto'; // Reset width to calculate actual content width
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        }
    }, [value]); // Re-run when the value changes

    const [stvar, setMess] = useState('');
    const [formData, setFormData] = useState({
        movieName: '',
        movieReview: '',
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
        axios.post('https://tryingthisagain-e6f8d0gqfmgsevft.eastus2-01.azurewebsites.net/genericEndpoint123',formData)
        .then(response => setMess(response.data))
    };

      return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="linkss">
                    Movie Name:
                    <textarea type="text" ref={inputRef} name="movieName" value={formData.movieName} onChange={handleChange} placeholder="MovieName" />
                </label>
                <label className="linkss2">
                    Movie Review:
                    <textarea type="text" ref={inputRef} name="movieReview" value={formData.movieReview} onChange={handleChange} placeholder="MovieReview"/>
                </label>
                <button type="submit">Submit</button>
                <p>{stvar}</p>
            </form>
        </div>
      );
    }

export default SubmissionPage;