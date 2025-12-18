import { useNavigate } from "react-router-dom";

function OptionsPage(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/SubmissionPage"); 
    };
    const handleClick2 = () => {
        navigate("/DeletePage");
    };
    const handleClick3 = () => {
        navigate("/EditPage");
    };
    return(
        <div>
            <p>What would you like to do?</p>
            <div className = "bbuton">
                <button onClick = {handleClick}>Submit a review</button>
                <button onClick = {handleClick3}>Edit a review</button>
                <button onClick = {handleClick2}>Delete a review</button>
            </div>
        </div>
    );
}

export default OptionsPage