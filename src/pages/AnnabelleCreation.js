import {useEffect} from 'react';
import {useState,useLayoutEffect,useRef} from 'react';
import axios from 'axios';

function usePersistedState(key, defaultValue) {
  // Initialize state with value from localStorage if available
  const [state, setState] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

function AnnabelleCreation(props){

    const origMovName = props.origMovName;
    const movName = "Annabelle: Creation";
    const movVal = "Release Date: 2017\n\nRating: 9.5/10\n\nThroughout my years as a horror movie buff, there have been plenty of movies that seem much more lackluster upon their second viewing through the lens of an older, more cultured April. This is one of the few movies that, upon rewatch, made me go back and drastically improve its rating. I don't know what I was thinking when I rated this movie so poorly upon its first viewing...I must have been in a crabby mood that day or something. Annabelle: Creation is possibly one of the most well-done and terrifying prequels I've ever seen. I would consider myself pretty desensitized to supernatural horror, as that's the main kind of horror I watch; however, this was one of the few supernatural movies that made me curl up in a ball and cringe as an adult. Even from the start of the movie, there was a quiet sense of dread permeating the atmosphere that made me sink further and further into my couch. If you thought that godforsaken doll was scary in the first movie, it's downright horrifying in this one.\n\nAs you may have guessed, the origins of the infamous Annabelle doll go much further back than the 1960s. The doll was created in 1943 by small-town toymaker Samuel Mullins to represent the likeness of his daughter (whose name was, unsurprisingly, Annabelle). In the first scene of the movie, we see Mullins meticulously crafting every part of the doll, from its bulging eyes to its ghoulish smile. Even before the doll gets possessed and turns evil, it looks impressively creepy. One thing I always find funny in these doll-themed horror movies is that the child who receives the doll never seems to notice how creepy-looking the doll is. I don't know if the children are stupid or extremely unobservant or both, but the dolls in these movies always look like something that should be soaked in holy water and burned. As if her evil smile and psycho eyes aren't enough, she's about half the size of a small child, standing around 2.5 ft tall with the legs fully extended. Why on God's green earth Mr. Mullins thought any child would want such a doll is beyond me, but it doesn't matter, because his little Annabelle seems to love it. As a side note, it would be really funny if, in one of these movies, as soon as the child was gifted the doll, they screamed and threw it in the fire. That would be a much more rational and realistic reaction, in my opinion, but then we wouldn't have any movie. So obviously the child who receives the doll must be as stupid and oblivious as the adults who gift them the doll. Stupid people are what make horror movies entertaining, after all.\n\nSpeaking of stupid, at the beginning of the movie, little Annabelle is dumb enough to get hit by a car, so that's where the token traumatic backstory originates. Many years later, in an attempt to move on from their daughter's death and bring some light back into their lives, the Mullins invite a small group of orphans to stay with them in their spacious farmhouse. The troupe of orphan girls is lead by a young nun, Sister Charlotte, whose devotion to God is almost as deep as her devotion to the girls. We are then introduced to the main characters, little Janice and her best friend, Linda. While these girls are very sweet, whoever wrote their characters clearly has never been around 8-year old girls. Janice and Linda were sitting still, playing with their dolls, and being laughably nice and respectful to each other. When my friends and I were that age, we would have been ripping the dolls' heads off and trying to throw each other out the car window, but I digress.";

    const [varVar, setVarVar] = useState(true);
    let prevPath = props.name;

    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto'; // Reset width to calculate actual content width
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        }
    }, [value]); // Re-run when the value changes

    const [stvar, setMess] = useState('');
    const [formData, setFormData] = usePersistedState("movInfo",{
        movieName: movName,
        movieReview: movVal,
        origMovName: origMovName,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior (page reload)
        if(/^[a-z]/.test(formData.movieName)){
            setMess("First word of movie name must be uppercase.")
        }
        else{
        setMess("Please wait, your review is loading.");
        axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/editEndpoint',formData)
        //axios.post('http://localhost:8080/editEndpoint',formData)
        .then(response => setMess(response.data))
        }
    };

     useEffect(() => {
    const handlePageLoad = (prevPath) => {
        if (prevPath === "/EditPage"){
            setVarVar(false);
        }
        else{
            setVarVar(true);
        }
    };

    handlePageLoad(prevPath);
  },[prevPath]); // The empty dependency array ensures this runs only once

    return(
        <div>
            {varVar && <h1>{movName}</h1>}
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
            {varVar && <pre className = "paragraphStylin">{movVal}</pre>}
            {!varVar &&<form onSubmit={handleSubmit}>
                <label className="linkss">
                    Movie Name:
                    <textarea className = "custom-input" type="text" ref={inputRef} name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Input movie name" />
                </label>
                <label className="linkss2">
                    Movie Review:
                    <textarea className = "customInp" type="text" ref={inputRef2} name="movieReview" value={formData.movieReview} onChange={handleChange} placeholder="Write movie review here"/>
                </label>
                <button type="submit">Submit</button>
                <p>{stvar}</p>
            </form>}
        </div>
    )
}

export default AnnabelleCreation;