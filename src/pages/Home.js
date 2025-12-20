import Insidious from './Insidious';
import TheConjuring2 from './TheConjuring2';
import IKnowWhatudid2 from './IKnowWhatudid2';
import IKnowWhatudid from './IKnowWhatudid';
import IKnowWhatudid3 from './IKnowWhatudid3';
import FunchyThesnowWoman from './FunchyThesnowWoman';
import FunchyThesnowWoman3 from './FunchyThesnowWoman3';
import FunchyThesnowWoman2 from './FunchyThesnowWoman2';
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
      { id: 2, text: 'Funchy The snowWoman 2', to: '/FunchyThesnowWoman2' },
      { id: 4, text: 'Funchy The snowWoman 3', to: '/FunchyThesnowWoman3' },
      { id: 5, text: 'Funchy The snowWoman', to: '/FunchyThesnowWoman' },
      { id: 6, text: 'I Know What u did 3', to: '/IKnowWhatudid3' },
      { id: 7, text: 'I Know What u did', to: '/IKnowWhatudid' },
      { id: 8, text: 'I Know What u did 2', to: '/IKnowWhatudid2' },
      { id: 9, text: 'The Conjuring 2', to: '/TheConjuring2' },
      { id: 10, text: 'Insidious', to: '/Insidious' },
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
        <Route path="/FunchyThesnowWoman2" element={<FunchyThesnowWoman2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchyThesnowWoman3" element={<FunchyThesnowWoman3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/FunchyThesnowWoman" element={<FunchyThesnowWoman name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/IKnowWhatudid3" element={<IKnowWhatudid3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/IKnowWhatudid" element={<IKnowWhatudid name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/IKnowWhatudid2" element={<IKnowWhatudid2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious" element={<Insidious name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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