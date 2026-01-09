import AnnabelleCreation from './AnnabelleCreation';
import IntheTallGrass from './IntheTallGrass';
import IveBeenAlone from './IveBeenAlone';
import Insidious2 from './Insidious2';
import Insidious from './Insidious';
import InsidiousChapter10 from './InsidiousChapter10';
import AsAboveSoBelow from './AsAboveSoBelow';
import AnnabelleCreation from './AnnabelleCreation';
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
      { id: 1, text: "The Conjuring 2", to: "/TheConjuring2", name: "The Conjuring 2" },
      { id: 3, text: "The Descent", to: "/TheDescent", name: "The Descent" },
      { id: 5, text: "Insidious Chapter 3", to: "/InsidiousChapter3", name: "Insidious Chapter 3" },
      { id: 6, text: "Terrifier 3", to: "/Terrifier3", name: "Terrifier 3" },
      { id: 7, text: "Annabelle: Creation", to: "/AnnabelleCreation", name: "Annabelle: Creation" },
      { id: 8, text: "As Above So Below", to: "/AsAboveSoBelow", name: "As Above So Below" },
      { id: 9, text: "Insidious Chapter 10", to: "/InsidiousChapter10", name: "Insidious Chapter 10" },
      { id: 10, text: "Insidious", to: "/Insidious", name: "Insidious" },
      { id: 11, text: "Insidious 2", to: "/Insidious2", name: "Insidious 2" },
      { id: 12, text: "I’ve Been Alone…", to: "/IveBeenAlone", name: "I’ve Been Alone…" },
      { id: 13, text: "In the Tall Grass", to: "/IntheTallGrass", name: "In the Tall Grass" },
      { id: 14, text: "Annabelle Creation", to: "/AnnabelleCreation", name: "Annabelle Creation" },
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
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AsAboveSoBelow" element={<AsAboveSoBelow name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter10" element={<InsidiousChapter10 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious" element={<Insidious name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious2" element={<Insidious2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/IveBeenAlone" element={<IveBeenAlone name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/IntheTallGrass" element={<IntheTallGrass name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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