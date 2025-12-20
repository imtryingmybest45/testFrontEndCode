import FunchytheSnowwoman2 from './FunchytheSnowwoman2';
import Hereisatestreview from './Hereisatestreview';
import InsidiousChapter from './InsidiousChapter';
import Conjuring from './Conjuring';
import TheConjuringChapter3 from './TheConjuringChapter3';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useMemo} from 'react';

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
    return [
      { id: 1, text: 'The Conjuring Chapter 3', to: '/TheConjuringChapter3' },
      { id: 4, text: 'Conjuring', to: '/Conjuring' },
      { id: 5, text: 'Insidious Chapter', to: '/InsidiousChapter' },
      { id: 6, text: 'Here is a test review', to: '/Hereisatestreview' },
      { id: 7, text: 'Funchy the Snowwoman 2', to: '/FunchytheSnowwoman2' },
    ];
  }, []); // <-- Empty array ensures it's created only once
  //const stvar = "hello";
  useEffect(() => {
    setLinks(linksData);
  },[linksData, setLinks]);

  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuringChapter3" element={<TheConjuringChapter3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Conjuring" element={<Conjuring name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter" element={<InsidiousChapter name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Hereisatestreview" element={<Hereisatestreview name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchytheSnowwoman2" element={<FunchytheSnowwoman2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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