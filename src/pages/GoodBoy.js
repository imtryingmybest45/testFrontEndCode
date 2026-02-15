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

function GoodBoy(props){

    const origMovName = props.origMovName;
    const movName = "Good Boy";
    const movVal = "Release Date: 2025\n\nRating: 6/10\n\nI'm happy to have finally seen the movie everyone's been yapping about starring our favorite furry little award-winner, Indy! As a quick prelude to those of you who don't know, Indy is a VERY talented Nova Scotia Duck Tolling Retriever who plays himself as the protagonist of this 2025 indie horror flick. He is officially the FIRST ever non-human to win a major acting award, snatching the \"Best Performance in a Horror or Thriller\" title at the Astra Film awards and beating out powerhouse actors such as Ethan Hawke, Alison Brie, and Sophie Thatcher. And for good reason, too; this dog somehow managed to deliver a powerful and haunting performance without saying a single word (obviously). It's hard enough getting a dog to act in a brief, two-minute scene in a film; it's another thing having one be the main actor and carry the ENTIRE movie. The fact that Indy had the discipline and attention span to follow his trainers' every command for a full 75-minute film (not including probable hours of retakes) is a true testament to his will and intelligence. There are people that think it's not fair that a dog stole such a prestigious acting award from \"real\" human actors/actresses, and to those people I say...RUFF luck, that's how the dog treat crumbles. If Thatcher, Hawke, and Brie really wanted the award, they should have given better performances. If anything, Indy was at a disadvantage to them, because he had to deliver a compelling and gut-wrenching performance without the ability to speak! Those who think that he didn't deserve the award clearly haven't seen the movie, because if they had, they would see that Indy earned it fair and square. His soulful eyes, expressive face, and heart-wrenching whimpers conveyed a fierce love for his owner better than any words could. I would easily give Indy's performance a 10/10, and I know for a fact that this little furry actor is going places.\n\nWe are not, however, rating Indy's performance; we are rating the movie as a whole, and this movie unfortunately didn't quite hit the mark for me. There are some things this movie did extremely well and things that it just didn't get quite right. For starters, I will say that the camera work, lighting, and scene-setting are top notch. I give props to the production team for creating an eerie, bone-chilling environment with such a small budget and limited space. The color scheme of the shots is cool-toned and gritty, creating an unsettling, mysterious aura throughout the film. Most of the shots of the entity are brief, ominous glimpses of shadows looming in the background, sometimes so brief you'll miss it if you don't pay attention. If you're a long-time reader of this site, you know how much I appreciate subtlety in supernatural flicks, and this movie nailed that on the head. I had no idea who the entity was or what exactly it wanted, but I knew it was evil to the core and that it was coming for Indy's owner, Todd, which is all you really need to know about it. While I do appreciate films that introduce a complex backstory and lore surrounding the entities, it's not always needed to further the plot, especially in films like this with a short run time. The scenes of the entity were terrifying and more than enough to drive the plot forward, which is about all I can ask from a good supernatural movie.\n\nNow, to the main drawback of this movie: the plot itself. I kind of understood what this movie was going for, but there were some scenes where I couldn't really decipher what was happening, and that really put a damper on it for me. For example, in one scene, Indy is chained to his dog house and the shadowy entity is attempting to drag him by his chain into it (really freaking scary scene, by the way, 10/10). Somehow, Indy breaks free and ends up in his owner's room on the second floor, materializing in the middle of the room and jumping into his arms. While this scene was heartwarming, it begs the question: how did this dog manage to get from the rainy garden outside to the second floor of a locked house? Furthermore, how did he suddenly break the metal chain that confined him to the dog house? The movie implies he somehow broke free by charging at the entity and knocking over the dog house, but how would that free him from the chain? Was the chain somehow trapped beneath the dog house? If so, why didn't he knock it over and free himself earlier? The continuity of this part of the movie was a bit confusing, and I honestly thought Indy was a ghost for a second, since the time between him freeing himself from his chain and getting into his owner's room just seemed impossible for any living being. Additionally, what exactly was wrong with Todd was a bit unclear. The beginning of the movie seems to imply that he went to his late grandfather's remote cabin to get away from it all after a stint in rehab, but later on it's revealed that he has a terminal lung disease. I was confused as to whether he had this disease before or if the house somehow caused him to fall ill with the disease. The disease manifested in him coughing frequently and sometimes hacking up blood, but he didn't start doing this until he stayed in the house. Most of the plot synopses I read say that he had the disease before he arrived at the house, but his sister, Vera, never seems to mention it, and most of her conversation with her brother seems to be surrounding preventing a relapse of his presumed drug addiction. Additionally, in the middle of the movie, Todd comes back to the house very inebriated with a needle in his arm, further hinting at a possible drug addiction. It very well could be that he had both the drug addiction and the pre-existing lung disease, and it was the house that was exacerbating the disease, but I sort of wish they had picked one or the other to zero in on. Throughout the movie, you can see his behavior changing and his symptoms getting worse, and I couldn't determine whether it was his drug addiction that was doing this or if it was the house itself. I know it seems like I'm nitpicking, and maybe some people don't mind a slightly vague movie premise, but these plot discontinuities left me spending most of the movie trying to figure out what exactly was happening instead of being able to focus on the camera work and Indy's performance. It's a shame, because I think if they had refined some of these major plot points, this movie could have really knocked it out of the park.\n\nRegardless of the rather obscure plot at some points, the movie provided enough information to know that the house contained some evil entity, and it was Indy's job to save his owner from this entity. I must say that the ending is particularly poignant; Indy has to choose whether to stay in the basement with his deceased owner, giving up and dying along with him, or go with Vera to move on and live the rest of his life. It's a powerful reminder that, no matter how painful the loss of a loved one is, it's essential that we move on with our lives, because that's what our loved one would have wanted us to do. It's a shame that this movie had so many timeline discontinuities, because I really think the concept and message were solid. I think, with a little more work, it really could have knocked it out of the park. Regardless, I still appreciate the movie for its innovativeness and, most of all, for our furry little star's stellar performance. I honestly think it's worth a watch just for Indy's performance alone, and, if anything, I hope this movie jump starts his acting career, because he's truly a powerhouse actor and has the potential to go places. I think, however, the most important thing we can take away from this movie is this: Indy is a very, very good boy!";
    const movTier = "B";
    const movYear = "2025";

    const [varVar, setVarVar] = useState(true);
    let prevPath = props.name;

    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

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
        movieTier: movTier,
        movieYear: movYear,
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
        const allowedStrings = ['S', 'A', 'B', 'C', 'D', 'F', 'NO'];
        if(/^[a-z]/.test(formData.movieName)){
            setMess("First word of movie name must be uppercase.")
        }
        else if (!allowedStrings.includes(formData.movieTier)){
            setMess("Can only input S, A, B, C, D, F, or NO.")
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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BODJhM2JhYjktN2JlMC00YzVjLWI3NjctMTgzYjhhZDk3ZjU2XkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
            {varVar && <pre className = "paragraphStylin">{movVal}</pre>}
            {!varVar &&<form onSubmit={handleSubmit}>
                <label className="linkss">
                    Movie Name:
                    <textarea className = "custom-input" type="text" ref={inputRef} name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Input movie name" />
                </label>
                <label className="linkss">
                    Release Year:
                    <textarea className = "custom-input" type="text" ref={inputRef4} name="movieYear" value={formData.movieYear} onChange={handleChange} placeholder="Input movie year" />
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

export default GoodBoy;