import TheAutopsyofJaneDoe from './TheAutopsyofJaneDoe';
import TheAutopsyofJaneDoe2 from './TheAutopsyofJaneDoe2';
import Conjuring2 from './Conjuring2';
import Conjuring from './Conjuring';
import ThisIsANewReview from './ThisIsANewReview';
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
      { id: 3, text: 'This Is A New Review', to: '/ThisIsANewReview' },
      { id: 4, text: 'Conjuring', to: '/Conjuring' },
      { id: 5, text: 'Conjuring 2', to: '/Conjuring2' },
      { id: 6, text: 'The Autopsy of Jane Doe 2', to: '/TheAutopsyofJaneDoe2' },
      { id: 7, text: 'The Autopsy of Jane Doe', to: '/TheAutopsyofJaneDoe' },
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
        <Route path="/ThisIsANewReview" element={<ThisIsANewReview name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Conjuring" element={<Conjuring name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Conjuring2" element={<Conjuring2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofJaneDoe2" element={<TheAutopsyofJaneDoe2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofJaneDoe" element={<TheAutopsyofJaneDoe name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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