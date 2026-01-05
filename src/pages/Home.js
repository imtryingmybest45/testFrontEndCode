import InsidiousChapter4 from './InsidiousChapter4';
import AnnabelleCreation from './AnnabelleCreation';
import AsAboveSoBelow2 from './AsAboveSoBelow2';
import Terrifier3 from './Terrifier3';
import InsidiousChapter3 from './InsidiousChapter3';
import TheDescent from './TheDescent';
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
      { id: 3, text: 'The Descent', to: '/TheDescent', name: "The Descent" },
      { id: 5, text: 'Insidious Chapter 3', to: '/InsidiousChapter3', name: "Insidious Chapter 3" },
      { id: 6, text: 'Terrifier 3', to: '/Terrifier3', name: "Terrifier 3" },
      { id: 7, text: 'As Above, So Below 2', to: '/AsAboveSoBelow2', name: "As Above, So Below 2" },
      { id: 8, text: 'Annabelle: Creation', to: '/AnnabelleCreation', name: "Annabelle: Creation" },
      { id: 9, text: 'Insidious Chapter 4', to: '/InsidiousChapter4', name: "Insidious Chapter 4" },
      { id: 10, text: 'Annabelle Creation', to: '/InsidiousChapter4', name: "Annabelle Creation" },
      { id: 11, text: 'Annabelle Creation', to: '/InsidiousChapter4', name: "Annabelle Creation" },
      { id: 12, text: 'Annabelle Creation', to: '/InsidiousChapter4', name: "Annabelle Creation" },
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
        <Route path="/TheDescent" element={<TheDescent name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter3" element={<InsidiousChapter3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Terrifier3" element={<Terrifier3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AsAboveSoBelow2" element={<AsAboveSoBelow2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter4" element={<InsidiousChapter4 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AsAboveSoBelow2" element={<AsAboveSoBelow2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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