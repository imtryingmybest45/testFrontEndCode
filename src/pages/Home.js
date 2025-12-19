import Hoowday from './Hoowday';
import Howdy from './Howdy';
import Insidious from './Insidious';
import TheConjuring2 from './TheConjuring2';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useMemo} from 'react';
//import {useState} from 'react-router-dom';

function Home(props){

  let tfVar = props.name;
  let setTFVar = props.age;
  let origMovName = props.origMovName;
  //let prevPath = props.prevPath;
  let setPrevPath = props.setPrevPath;
  //let setReinit = props.setReinit;
  let setReinit = props.setReinit;
  const setLinks = props.linksStuff;

  const handleClick = () => {
    setPrevPath(window.location.pathname);
    setTFVar(false);
  }

  const linksData = useMemo(() => {
    return [
      { id: 1, text: 'The Conjuring 2', to: '/TheConjuring2' },
      { id: 2, text: 'Insidious', to: '/Insidious' },
<<<<<<< HEAD
      { id: 3, text: 'Howdy', to: '/Howdy'},
=======
      { id: 3, text: 'Howdy', to: '/Howdy' },
      { id: 4, text: 'Hoowday', to: '/Hoowday' },
>>>>>>> efe615ed99498d54604c61238dff6956cb76cc67
    ];
  }, []); // <-- Empty array ensures it's created only once
  const stvar = "hello";
  useEffect(() => {
    setLinks(linksData);
  },[linksData, setLinks]);

  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {stvar}/>} />
        <Route path="/Insidious" element={<Insidious name = {setTFVar}/>} />
<<<<<<< HEAD
        <Route path="/Howdy" element={<Howdy name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
=======
        <Route path="/Howdy" element={<Howdy name = {setTFVar}/>} />
        <Route path="/Hoowday" element={<Hoowday name = {setTFVar}/>} />
>>>>>>> efe615ed99498d54604c61238dff6956cb76cc67
      </Routes>
      <nav>
        <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
              {linksData.map((link) => (
              <li key={link.id}>
                  {tfVar&&<Link to={link.to} onClick = {()=>handleClick()}>{link.text}</Link>}
              </li>
              ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;