import Conjuring6 from './Conjuring6';
import Conjuring from './Conjuring';
import Conjuring5 from './Conjuring5';
import Conjuring2 from './Conjuring2';
import Autopsy from './Autopsy';
import Autopsy2 from './Autopsy2';
import Weapons from './Weapons';
import Weapons2 from './Weapons2';
import IKnowWhatyouDidLastSummer from './IKnowWhatyouDidLastSummer';
import TheConjuringChapter4 from './TheConjuringChapter4';
import TheConjuring from './TheConjuring';
import TheConjuringChapter3Again from './TheConjuringChapter3Again';
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
      { id: 1, text: 'The Conjuring Chapter 2', to: '/TheConjuringChapter2' },
      { id: 2, text: 'Insidious', to: '/Insidious' },
      { id: 3, text: 'The Conjuring Chapter 3 Again', to: '/TheConjuringChapter3Again' },
      { id: 4, text: 'The Conjuring', to: '/TheConjuring' },
      { id: 5, text: 'The Conjuring Chapter 4', to: '/TheConjuringChapter4' },
      { id: 6, text: 'I Know What you Did Last Summer', to: '/IKnowWhatyouDidLastSummer' },
      { id: 7, text: 'Weapons 2', to: '/Weapons2' },
      { id: 8, text: 'Weapons', to: '/Weapons' },
      { id: 9, text: 'Autopsy 2', to: '/Autopsy2' },
      { id: 10, text: 'Autopsy', to: '/Autopsy' },
      { id: 11, text: 'Conjuring 2', to: '/Conjuring2' },
      { id: 12, text: 'Conjuring 5', to: '/Conjuring5' },
      { id: 13, text: 'Conjuring', to: '/Conjuring' },
      { id: 14, text: 'Conjuring 6', to: '/Conjuring6' },
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
        <Route path="/TheConjuringChapter3Again" element={<TheConjuringChapter3Again name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuring" element={<TheConjuring name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuringChapter4" element={<TheConjuringChapter4 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/IKnowWhatyouDidLastSummer" element={<IKnowWhatyouDidLastSummer name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Weapons2" element={<Weapons2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Weapons" element={<Weapons name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Autopsy2" element={<Autopsy2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Autopsy" element={<Autopsy name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Conjuring2" element={<Conjuring2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Conjuring5" element={<Conjuring5 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Conjuring" element={<Conjuring name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Conjuring6" element={<Conjuring6 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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