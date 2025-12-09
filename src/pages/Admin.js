import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Admin(){
  const [inputValue, setInputValue] = useState('');
  const [correctPass, setPass] = useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior (page reload)
    if (inputValue == 'dash'){
      navigate("/SubmissionPage"); 
    }
    else{
      setPass('Incorrect password. Please try again.');
    }
    //console.log('Submitted value:', inputValue);
    // You can send this value to an API or perform other actions here
  };
  return (
    <div>
      <h1>This is the admin page.</h1>
      <p>Here, if you are an admin, you can submit a review.</p>
      <form onSubmit={handleSubmit}>
      <label>
        Enter Password:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    <p>{correctPass}</p>
    </div>
  );
}

export default Admin;