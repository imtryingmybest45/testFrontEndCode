import TheDescent2 from './TheDescent2';
import FunchytheSnowwoman3 from './FunchytheSnowwoman3';
import FunchytheSnowwoman2 from './FunchytheSnowwoman2';
import FunchytheSnowwoman from './FunchytheSnowwoman';
import Insidious from './Insidious';
import TheConjuringChapter2 from './TheConjuringChapter2';
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
  let setPrevPath = props.setPrevPath;
  let setReinit = props.setReinit;
  const setLinks = props.linksStuff;

  const handleClick = () => {
    setPrevPath(window.location.pathname);
    setTFVar(false);
  }

  const linksData = useMemo(() => {
    return [
      { id: 1, text: 'The Conjuring Chapter 2', to: '/TheConjuringChapter2' },
      { id: 2, text: 'Insidious', to: '/Insidious' },
      { id: 3, text: 'Funchy the Snowwoman', to: '/FunchytheSnowwoman' },
      { id: 4, text: 'Funchy the Snowwoman 2', to: '/FunchytheSnowwoman2' },
      { id: 5, text: 'Funchy the Snowwoman 3', to: '/FunchytheSnowwoman3' },
      { id: 6, text: 'The Descent 2', to: '/TheDescent2' },
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
        <Route path="/TheConjuringChapter2" element={<TheConjuringChapter2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious" element={<Insidious name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchytheSnowwoman" element={<FunchytheSnowwoman name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchytheSnowwoman2" element={<FunchytheSnowwoman2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchytheSnowwoman3" element={<FunchytheSnowwoman3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheDescent2" element={<TheDescent2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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