import AndImupposedtoa from './AndImupposedtoa';
import IamaddingANewreview from './IamaddingANewreview';
import ThisMovieNameiscompletelydifferentnow from './ThisMovieNameiscompletelydifferentnow';
import TheAutopsyofjanedoe3 from './TheAutopsyofjanedoe3';
import TheAutopsyofjanedoe from './TheAutopsyofjanedoe';
import TheAutopsyofjanedoe2 from './TheAutopsyofjanedoe2';
import TheDescent3 from './TheDescent3';
import TheDescent from './TheDescent';
import TheDescent2 from './TheDescent2';
import FunchytheSnowwoman3 from './FunchytheSnowwoman3';
import FunchytheSnowwoman2 from './FunchytheSnowwoman2';
import FunchytheSnowwomanSheIsMyMom from './FunchytheSnowwomanSheIsMyMom';
import Insidious from './Insidious';
import TheConjuring from './TheConjuring';
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
      { id: 1, text: 'The Conjuring', to: '/TheConjuring' },
      { id: 2, text: 'Insidious', to: '/Insidious' },
      { id: 3, text: 'Funchy the Snowwoman She Is My Mom', to: '/FunchytheSnowwomanSheIsMyMom' },
      { id: 4, text: 'Funchy the Snowwoman 2', to: '/FunchytheSnowwoman2' },
      { id: 5, text: 'Funchy the Snowwoman 3', to: '/FunchytheSnowwoman3' },
      { id: 6, text: 'The Descent 2', to: '/TheDescent2' },
      { id: 7, text: 'The Descent', to: '/TheDescent' },
      { id: 8, text: 'The Descent 3', to: '/TheDescent3' },
      { id: 9, text: 'The Autopsy of jane doe 2', to: '/TheAutopsyofjanedoe2' },
      { id: 10, text: 'The Autopsy of jane doe', to: '/TheAutopsyofjanedoe' },
      { id: 11, text: 'The Autopsy of jane doe 3', to: '/TheAutopsyofjanedoe3' },
      { id: 12, text: 'This Movie Name is completely different now', to: '/ThisMovieNameiscompletelydifferentnow' },
      { id: 13, text: 'I am adding A New review', to: '/IamaddingANewreview' },
      { id: 14, text: 'And Im upposed to a', to: '/AndImupposedtoa' },
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
        <Route path="/TheConjuring" element={<TheConjuring name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious" element={<Insidious name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchytheSnowwomanSheIsMyMom" element={<FunchytheSnowwomanSheIsMyMom name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchytheSnowwoman2" element={<FunchytheSnowwoman2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchytheSnowwoman3" element={<FunchytheSnowwoman3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheDescent2" element={<TheDescent2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheDescent" element={<TheDescent name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheDescent3" element={<TheDescent3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofjanedoe2" element={<TheAutopsyofjanedoe2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofjanedoe" element={<TheAutopsyofjanedoe name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofjanedoe3" element={<TheAutopsyofjanedoe3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ThisMovieNameiscompletelydifferentnow" element={<ThisMovieNameiscompletelydifferentnow name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/IamaddingANewreview" element={<IamaddingANewreview name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AndImupposedtoa" element={<AndImupposedtoa name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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