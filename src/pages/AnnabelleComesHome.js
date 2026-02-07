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

function AnnabelleComesHome(props){

    const origMovName = props.origMovName;
    const movName = "Annabelle Comes Home";
    const movVal = "Release Date: 2019\n\nRating: 4/10\n\nWell, ladies and gentleman, while Annabelle Comes Home doesn't have much else to write home about, it at least claims the title of this website's first negative review. It's sad, because the first two Annabelles were engaging and excellently done, and this one just fell flat. I shouldn’t be surprised, though, since there’s really only so far you can stretch the scary doll lore.\n\nTruthfully, the story arc of this movie surprised me; I thought they were going to finally delve into the story of the two nurses, but they instead chose to have Annabelle wreak havoc on the Warrens’ youngest daughter, Judy, and her two hapless baby sitters. I appreciate them not going with the most obvious next direction in the franchise, but that’s where my positive critiques end. The rest of this movie includes the most hackneyed, overdone jump scares with cheap CGI effects. The Annabelle demon looked almost as laughably fake as its computer-generated growl. All of the other “lesser demons” had little to no backstory or connection to the main demon. It felt like the director just added them in to be scary, but they served no other purpose in driving the plot. In my opinion, ghost movies are much more compelling and impactful when the spirits have some type motive to haunt the protagonist, and it felt like these spirits were scaring the girls just because they were there. I would have liked if the other spirits were all different manifestations of the main Annabelle demon, similar to what was done in Annabelle Creation, but it seems like they were just there for no reason and had no relation to the main demon.\n\nAnother thing I didn't appreciate was the casting choice of Judy. Don't get me wrong, McKenna Grace is a fine actress, but she looks nothing like young Sterling Jerins, who played Judy in the first two Conjurings. I understand the need to select a new, younger actress to ensure timeline consistency amongst the movies, but they could have picked someone that looked EVEN A LITTLE like Jerins. The difference is especially glaring if you watch all the Conjuring movies in a row; it's hard to suspend disbelief enough to believe that this Judy is the same as the Judy in the franchise's first two movies. Her features, mannerisms, and overall demeanor are entirely different than the Judy we grew to know and love in the Conjuring 1 & 2. The Judy in this movie seemed more somber and sullen than the girlish, innocent Judy in the previous movies. This could be due to the trauma of her continuous exposure to \"the other side\" via accidental contact with spirits that may have attached themselves to her parents; regardless, that doesn't explain the difference in the pitch/tone of her voice and the way she articulates herself. It's very clear from the first minute of the movie that this is an entirely different person, and I must admit it's a bit jarring (at least to me). Additionally, the two young women babysitting Judy in the movie are supposed to be high school girls, and they look like 25-year olds cosplaying as high schoolers. I get all of the arguments against child labor and stuff, but you cast a minor to play Judy, so why not go all in and actually make the rest of the characters look their appropriate ages?\n\nI must say that these questionable casting choices and low-quality CGI effects are unfortunate, because they detract from the movie's otherwise poignant and impactful message. Daniela, the headstrong, rebellious friend of Judy's babysitter, Mary Ellen, unlocks the Warrens' haunted artifact room out of morbid curiosity and unwittingly releases the Annabelle demon. While I originally attributed this rash decision to teenage angst and a lack of concern for her own safety and the safety of the Warrens, it's revealed her ultimate motive was to contact her father, whom she lost in an at-fault car accident a few years ago. She wanted to know that an afterlife existed so that she could ensure that he was still there with her, that he was safe, and to know if he could ever forgive her. In a particularly heartfelt scene at the end of the movie, Lorraine tells Daniela that her father has contacted her from the other side, and that he loves her and says the accident wasn't her fault. Lorraine's compassion and understanding towards Daniela's situation, especially after Daniela released a demon that destroyed their house and traumatized their daughter, was particularly touching. It reminds us that death is not the end, it is merely a transition, and any mistakes you make in this life, no matter how big they may seem, can never overcome the love of family. At least that's what I got from it. Truthfully, it made me tear up a bit at the end. But that doesn't make up for the mediocrity of the rest of the movie. I'm not judging this movie as a drama, or a comedy, or an action movie/thriller. It is a horror movie, and it's supposed to be SCARY, and this movie just wasn't scary. There are a few spooky scenes in there, but the vast majority of it is just so underwhelming and overdone.\n\nI know this was a short review, but there really just wasn't much to say about this movie. It was overwhelmingly mediocre and was truthfully just a skip for me. If you want to watch it, be my guest, but do know that it's about two hours of your life you'll never get back.";
    const movTier = "C";
    
    const [varVar, setVarVar] = useState(true);
    let prevPath = props.name;

    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

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
        movieTier: movTier
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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BMjRjYmQ5NTQtYzIyNi00MmNlLTlmNjYtNjQ3NzRlZmY3YjFlXkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
            {varVar && <pre className = "paragraphStylin">{movVal}</pre>}
            {!varVar &&<form onSubmit={handleSubmit}>
                <label className="linkss">
                    Movie Name:
                    <textarea className = "custom-input" type="text" ref={inputRef} name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Input movie name" />
                </label>
                <label className="linkss">
                    Tier:
                    <textarea className = "custom-input" type="text" ref={inputRef3} name="movieTier" value={formData.movieTier} onChange={handleChange} placeholder="Input movie tier" />
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

export default AnnabelleComesHome;