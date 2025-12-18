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
    if (inputValue === 'password'){
      navigate("/OptionsPage"); 
    }
    else{
      setPass(true);
    }
  };
  return (
    <div>
      <h1>This is the admin page.</h1>
      <p>Here, if you are an admin, you can submit a review.</p>
      <form onSubmit={handleSubmit} className = "wow">
      <label className = "wow">
        Enter Password:
        <input type="password" className = "wow"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    {correctPass && <p>Incorrect <b><i>password</i></b>. In order to access admin privleges, you must submit the correct <b><i>password</i></b>.
     I know that it may be difficult to think of what the <b><i>password</i></b> could be, but if you think carefully, I am sure you can figure out what the correct <b><i>password</i></b> is.</p>}
    </div>
  );
}

export default Admin;