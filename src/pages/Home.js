import BlackPhone from './BlackPhone';
import TheGirlNextDoor2007 from './TheGirlNextDoor2007';
import Kafds from './Kafds';
import BlackPhone2 from './BlackPhone2';
import GoodBoy from './GoodBoy';
import AnnabelleComesHome from './AnnabelleComesHome';
import AnnabelleCreation from './AnnabelleCreation';
import Annabelle from './Annabelle';
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
import stoplizard from './stoplizard.png';

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
      { id: 1, text: "The Conjuring 2", to: "/TheConjuring2", name: "The Conjuring 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'S'},
      { id: 2, text: "Insidious", to: "/Insidious", name: "Insidious", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_SX300.jpg', tier: 'A'},
      { id: 3, text: "The Descent", to: "/TheDescent", name: "The Descent", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_SX300.jpg', tier: 'A'},
      { id: 5, text: "Insidious Chapter 2", to: "/InsidiousChapter2", name: "Insidious Chapter 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTg0OTA5ODIxNF5BMl5BanBnXkFtZTcwNTUzNDg4OQ@@._V1_SX300.jpg', tier: 'A'},
      { id: 6, text: "Terrifier 3", to: "/Terrifier3", name: "Terrifier 3", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 7, text: "Annabelle", to: "/Annabelle", name: "Annabelle", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 8, text: "Annabelle: Creation", to: "/AnnabelleCreation", name: "Annabelle: Creation", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_SX300.jpg', tier: 'S'},
      { id: 9, text: "Annabelle Comes Home", to: "/AnnabelleComesHome", name: "Annabelle Comes Home", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjRjYmQ5NTQtYzIyNi00MmNlLTlmNjYtNjQ3NzRlZmY3YjFlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C'},
      { id: 10, text: "Good Boy", to: "/GoodBoy", name: "Good Boy", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODJhM2JhYjktN2JlMC00YzVjLWI3NjctMTgzYjhhZDk3ZjU2XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B'},
      { id: 11, text: "Black Phone 2", to: "/BlackPhone2", name: "Black Phone 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTVjMzNmZGYtOWU5NS00NDYzLThhZTktZGNlODIwYWVhMDRmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B'},
      { id: 12, text: "Kafds", to: "/Kafds", name: "Kafds", moviePoster: 'error', tier: 'B'},
      { id: 13, text: "The Girl Next Door (2007)", to: "/TheGirlNextDoor2007", name: "The Girl Next Door (2007)", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTk4ZmI4YzctNTM5MC00YzY1LThjOTgtZjA5OTcwN2ZjNDFlXkEyXkFqcGdeQXVyMjE0MzE1MA@@._V1_SX300.jpg', tier: 'NO'},
      { id: 14, text: "Black Phone", to: "/BlackPhone", name: "Black Phone", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjFhZTcxOTktMzllMS00MzIzLWJhODEtZDU5YTFkNzRjZWQyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'NO'},
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
      {tfVar&&<img src={stoplizard} alt="This is a lizard that says STOP" />}
      {tfVar&&<h1 className="parStyl">ALERT: This is the scratch version of my website</h1>}
      {tfVar&&<h1 className="parStyl2">For the real version, go to <a href = "https://aprilshorrorcorner.com">aprilshorrorcorner.com</a></h1>}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious" element={<Insidious name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheDescent" element={<TheDescent name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter2" element={<InsidiousChapter2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Terrifier3" element={<Terrifier3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Annabelle" element={<Annabelle name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleComesHome" element={<AnnabelleComesHome name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GoodBoy" element={<GoodBoy name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/BlackPhone2" element={<BlackPhone2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Kafds" element={<Kafds name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheGirlNextDoor2007" element={<TheGirlNextDoor2007 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/BlackPhone" element={<BlackPhone name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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