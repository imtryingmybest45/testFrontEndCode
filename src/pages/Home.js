import Thisisa from './Thisisa';
import Thisisa3 from './Thisisa3';
import TheConjuringChapter2 from './TheConjuringChapter2';
import TheConjuringChapter from './TheConjuringChapter';
import TheConjuringChapter4 from './TheConjuringChapter4';
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
      { id: 1, text: 'The Conjuring Chapter 4', to: '/TheConjuringChapter4' },
      { id: 2, text: 'The Conjuring Chapter', to: '/TheConjuringChapter' },
      { id: 3, text: 'The Conjuring Chapter 2', to: '/TheConjuringChapter2' },
      { id: 4, text: 'This is a 3', to: '/Thisisa3' },
      { id: 5, text: 'This is a', to: '/Thisisa' },
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
        <Route path="/TheConjuringChapter4" element={<TheConjuringChapter4 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuringChapter" element={<TheConjuringChapter name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuringChapter2" element={<TheConjuringChapter2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Thisisa3" element={<Thisisa3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Thisisa" element={<Thisisa name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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