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

function BlackPhone2(props){

    const origMovName = props.origMovName;
    const movName = "Black Phone 2";
    const movVal = "Release Date: 2025\n\nRating: 6/10\n\nAfter the 2021 debut of the original Black Phone, I had high hopes for this sequel, but it unfortunately fell flat in many important areas.\n\nSince I'm in a good mood this morning, I'll discuss the pros of this movie first. And I obviously have to start with the stunning, incredibly well-executed camera work. Truthfully, I haven't seen such good scene-setting and lighting/ambiance since 2012's Sinister. The film's most notable scenes are actually reminiscent of the eerie found footage segments in Sinister, except this time they occur as Gwen's dream sequences. It contains almost the exact same format as the Sinister found footage: a few minutes of footage of a happy, carefree child, followed immediately by grisly shots of his gruesome murder. It even has a similar subtle yet bone-chilling soundtrack to accompany the footage. Some people have accused the writers of blatantly ripping off Sinister with these scenes, but I disagree. Yes, the format is extremely similar to Sinister, but the context in which they occur is completely different and entirely original. I've never seen a film implement this kind of gritty, almost old-film-like aura to capture a dream sequence, and I think it works surprisingly well. This comes back to something I've discussed several times in past reviews, and I'll say it again: using concepts and tropes from past movies isn't bad as long as they're executed well. I think many people are too quick to write off a movie if they see any concepts or scenes that are commonly employed in previous (especially classic) movies simply because they view it as \"ripping off\" that movie. There are only so many ways you can create a scary scene and atmosphere, so it's unfair to expect every scene of a movie to implement completely original ideas on this front. I think that, as long as a movie employs high-quality special effects and camera work when borrowing concepts from past movies, it can absolutely work, as long as the overall plot of the movie is original. The found footage-esque scenes are highly reminiscent of Sinister, but they occur in an entirely different context and are brilliantly executed, so it works. Additionally, I absolutely LOVED the choice of setting for this movie. I have a soft spot for snowy mountains, and this movie occurs in COLORADO, which is my absolute favorite place on earth. The film takes place in an old, abandoned youth camp high in the mountains called \"Alpine Camp,\" and it honestly looks like my dream winter wonderland. On top of that, the way they were able to transform this idyllic retreat into a hostile, barren, and dangerous environment during the progression of the movie was truly astounding. I have a lot of respect for production teams that have the ability to create entirely different-looking settings in a single set location, as I can imagine their limited budget and space to work with would really make this difficult. Throughout the movie I felt completely immersed in the environment, almost as if I was right alongside the characters in those blizzard-covered mountains. I appreciate an immersive and encapsulating setting, and I must say this movie did that extremely well.\n\nNow, to the major con of this movie: the plot. You never want to hear that the con of a movie is the plot itself (it's almost saying as if the whole movie was a fail), but that's really the only way I can say it. I think the idea of bringing back the Grabber in ghost form to torment Finny and Gwen was really not the best choice. While I appreciate the desire to follow up with Finny and Gwen after the Grabber incident and expand upon their family's backstory, I think the choice to have the ghost of the Grabber call them back to some random camp in the mountains was weird. It seemed like they were desperately trying to incorporate the same villain into the movie, but his connection to the characters was flimsy and a bit confusing. Also, the way in which the spirit of the Grabber was able to literally throw Gwen around in her \"dream world\" but have people see some invisible entity picking her up in the real world was just odd and, frankly, a bit ridiculous. I suppose I understand the Grabber's motive to stick around and torment Finny in the afterlife, but if the way to defeat him was to find the bodies of his victims at Alpine camp, why IN THE WORLD would he bring them to the camp? I suppose you could argue that his spirit is bound to the camp, but then how was he able to interact with and harm Gwen through her dreams when she wasn't at the camp? Wouldn't it make more sense to just harm them where they are instead of leading them directly to his Achilles heel? Truthfully, I think they should have either brought the Grabber back or Gwen and Finny back, but not both. It seems like, by bringing both of them back, they were trying too hard to continue the exact plot of the first movie and were too lazy to create new main characters. The way I see it, it should have either gone one of two ways: Finny and Gwen were brought back to somehow battle a \"new\" version of the Grabber (perhaps a deranged fan that wanted to continue his work?), or the ghost of the Grabber was brought back to torment some new children in their dreams. Aside from the fact that I think it was a bit unoriginal and boring to bring back the same protagonists and antagonist from the previous movie, the way in which they brought the Grabber back and his methods of tormenting the family were confusing and strange. I appreciate the show's attempt to expand upon the backstory of Gwen and Finny's mother, but I honestly think their story was brought to a close in the first movie. I think it would have been better if they had introduced some new kids as the central characters in this movie and maybe have Gwen or Finny make a cameo to help them. It honestly seemed just seemed redundant and unnecessary to bring them back as the main characters.\n\nAnyways, at the end, they do finally close the family's story with a touching ending: Gwen's deceased mother, Hope, calls her through a payphone beyond the grave, and she assures her and Finny that she is fine, there is a world beyond, and she is happy. Gwen and Finny engage in a tearful embrace, and, with their work done and the Grabber finally defeated for good, they leave the camp as a happy family. Defeating the Grabber finally healed Finny's deep-seated trauma and resentment, and the knowledge that their mother didn't kill herself alleviated his father's guilt. This satisfying close to the family's story somewhat redeemed the mediocrity of this movie. I do think, just to gain closure for Finny, his family, and the Grabber's victims, this movie is worth a watch. Don't, however, expect this movie to knock your socks off, because it unfortunately just doesn't live up to its predecessor.";
    const movTier = "B";
    
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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BMTVjMzNmZGYtOWU5NS00NDYzLThhZTktZGNlODIwYWVhMDRmXkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
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

export default BlackPhone2;