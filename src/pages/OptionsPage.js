import { useNavigate, useLocation } from "react-router-dom";
import {useEffect} from "react";

function OptionsPage(props){
    let setUsersApp = props.setUsersApp;

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        setUsersApp({usersApp: {name: undefined}});
        navigate("/Submit", { state: { fromLogin: true } }); 
    };
    const handleClick2 = () => {
        navigate("/Delete");
    };
    const handleClick3 = () => {
        navigate("/Edit");
    };

    useEffect(() => {
    // Save current path to localStorage on every change
        localStorage.setItem('lastPath', location.pathname);
    }, [location]);

    return(
        <div>
            <p>What would you like to do?</p>
            <div className = "optionsButton">
                <button onClick = {handleClick}>Submit a review</button>
                <button onClick = {handleClick3}>Edit a review</button>
                <button onClick = {handleClick2}>Delete a review</button>
            </div>
        </div>
    );
}

export default OptionsPage