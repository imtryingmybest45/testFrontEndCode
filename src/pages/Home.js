import Terrifier3 from './Terrifier3';
import InsidiousChapter2 from './InsidiousChapter2';
import TheDescent from './TheDescent';
import Insidious from './Insidious';
import TheConjuring2 from './TheConjuring2';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useMemo} from 'react';
import boo from './boo.png';

function Home(props){

  let tfVar = props.name;
  let setTFVar = props.age;
  let origMovName = props.origMovName;
  let setPrevPath = props.setPrevPath;
  const setLinks = props.linksStuff;

  const handleClick = () => {
    setPrevPath(window.location.pathname);
    setTFVar(false);
  }

  const linksData = useMemo(() => {
    
    const linksDataUnsorted = [
      { id: 1, text: 'The Conjuring 2', to: '/TheConjuring2', name: "The Conjuring 2" },
      { id: 2, text: 'Insidious', to: '/Insidious', name: "Insidious" },
      { id: 3, text: 'The Descent', to: '/TheDescent', name: "The Descent" },
      { id: 5, text: 'Insidious Chapter 2', to: '/InsidiousChapter2', name: "Insidious Chapter 2" },
      { id: 6, text: 'Terrifier 3', to: '/Terrifier3', name: "Terrifier 3" },
    ];
  const linksDataSorted = [...linksDataUnsorted].sort((a, b) => {
      return a.name.localeCompare(b.name);
  });
  return linksDataSorted;
  }, []); // <-- Empty array ensures it's created only once
  //const stvar = "hello";

  useEffect(() => {
    setLinks(linksData);
  },[linksData, setLinks]);

  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<img src={boo} alt="This is a ghost that says BOO" />}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious" element={<Insidious name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheDescent" element={<TheDescent name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter2" element={<InsidiousChapter2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Terrifier3" element={<Terrifier3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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