import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function EditPage(props){
    let setTFVar = props.age;
    let setPrevPath = props.setPrevPath;
    let {linksData} = props;
    let setOrigMovName = props.setOrigMovName;
    const setPathName = props.setPathName;

    const handleClick=(origMovName)=>{
        setOrigMovName(origMovName);
        setPrevPath(window.location.pathname);
        setTFVar(false);
    }
    
    useEffect(() => {
    setPrevPath("/EditPage");
    },[setPrevPath]);

    return(
        <div>
            <h1>This is the edit page.</h1>
            <p>Pick a movie to edit.</p>
      <nav>
        <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
              {linksData.map((link) => (
              <li key={link.id}>
                  <Link to={link.to} onClick = {()=>handleClick(link.text)}>{link.text}</Link>
              </li>
              ))}
        </ul>
      </nav>
        </div>
    )
}
export default EditPage