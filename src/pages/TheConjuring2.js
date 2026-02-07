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

function TheConjuring2(props){

    const origMovName = props.origMovName;
    const movName = "The Conjuring 2";
    const movVal = "Release Date: 2016\n\nRating: 9.5/10\n\nWhat can I say about this movie other than it is my favorite horror movie in the Conjuring universe, if not in all of horror. Its spot in S-tier is well earned, as James Wan truly created a masterpiece with this film.\n\nWhile I enjoy most of the Conjuring movies for a light watch when I'm bored, I don't particularly find them scary, as many of the scare tactics are way overdone to the point of making them unrealistic. The majority of the movies implement all of the basic supernatural horror tropes (jump scares, spitting blood, demonic growling, etc). The main antagonists in a lot of the films don't really have any backstory other than \"Ooohhh...scary demon from hell.\" For the most part, the Conjuring universe movies are good popcorn flicks, but none of them really stick out in my mind. Except for this one.\n\nWhat the Conjuring 2 does so well that differentiates it from other run-of-the-mill supernatural movies is its artful use of subtlety in its scare tactics. The key to a bone-chilling scare is subtlety -- leaving some things to the viewer's imagination. No other horror movie antagonist more clearly exemplifies this concept than the Conjuring 2's infamous demon nun, Valak. We first encounter Valak in the flashback at the beginning of the film, when Ed and Lorraine are investigating demonic activity in the Lutz family's home. During a clairvoyant encounter, Lorraine is led to the basement by a small ghost child, who directs her to an old mirror covered in cloth. Upon removing the cloth, Lorraine sees a six foot tall, willowy, emaciated nun figure with sunken out, glowing eyes standing behind her in the mirror. It is standing far enough away to where you can't resolve a ton of detail, but visible enough to where, without a shadow of doubt, you understand that this thing is inhuman. What follows is a chilling montage of Lorraine turning around, seeing nothing, and turning back only to see the nun has inched closer to her in the mirror. Reading this may cause a seasoned horror veteran to roll their eyes; the ghost-in-mirror trope is one that shows up in seemingly every supernatural movie. While this may be true, the ambiance, camera work, and pacing are so artfully done that what would normally be a typical, run-of-the-mill ghost movie scare is transformed into a scene gives you goosebumps and makes your blood run cold. This less-is-more approach is something that Wan implements throughout his films, and it is ultimately what sets the Conjuring 2 apart from the other, more theatrical and in-your-face Conjuring movies. Wan uses this tactic again in one of the most infamous scenes of the movie: the painting room scene.\n\nIn this scene, Lorraine goes to investigate a loud noise in her den, which contains an eerie depiction of The Nun that was painted by Ed a few days prior when it appeared to him in a dream. As soon as she enters the room, the door slams shut behind her, trapping her inside. A tape recorder flips on out of nowhere, and we hear a children's choir singing \"Hark the Herald Angels Sing.\" The use of a children's hymn to introduce such a blasphemous, inhuman creature truly illustrates how evil this spirit is. It has such little regard for Christ and all that is holy that it uses a hymn glorifying Him to mock Him and slander His name. Just as quickly as it started, the music stops. What follows is a long, eerie pause with the camera zoomed in on Lorraine's horrified face. The silence is then broken by the soft, eerie vocalizing of a choir. We see the side profile of a six-foot tall, ominous shadow appear on the opposite wall of the den. It slowly walks across the wall, rounding the corner to the adjacent wall, and finally turns to face forward while standing behind the painting. At this moment, we to put it bluntly, we know we are fucked. After a few beats of dead silence, the nun grabs the painting and rushes at Lorraine, while a deafening, discordant cacophony of trumpets plays in the background. In my opinion, this two minute scene is the scariest, most impactful scene in any horror movie I've ever seen. While the Conjuring was my first introduction into horror, it was this movie, and this scene in particular, that caused me to fall in love with it and become a horror fan.\n\nWhile Valak is the main antagonist in this film, there are other, less powerful but no less terrifying spirits that serve him and aid him in enslaving human souls. One such entity is the Crooked Man, who is introduced early on the film as an unassuming cartoon painted on a music box. Obviously, since this is a horror movie, we know to absolutely NEVER trust a children's toy (especially one that sings), and it is hinted at pretty early on that this music box is sinister. The Crooked Man first appears in his fully demonic form to Billy Hodgson, the owner of the music box and the brother of Janet Hodgson, whose soul is the main target of Valak. The way in which the Crooked Man's true form is first revealed is surprisingly creative and unexpected, which is rare in supernatural films, which tend to rely upon the same hackneyed set of scare tactics throughout. In the middle of the night, Billy is awoken by the sound of the family dog ringing the little bell at the door to be let out. As Billy bends to open the doggie door for him, we see him suddenly transform into an eight-foot tall, hulking, mangled rendition of the innocent drawing on Billy's music box. He immediately lunges at Billy with his hooked hand, and in a booming, raspy voice, he recites an eerie rendition of the children's tune played by the music box earlier: \"There once was a CROOKED MAN, who lived in a CROOKED HOUSE...he walked the crooked walk, and rung the crooked bell, and sent their whole family TO CROOKED HELL.\" At this point, we learn the presence haunting the Hodgsons is not only demonic but powerful enough to cause harm to their family. Ed and Lorraine Warren, upon hearing of the encounter with the Crooked Man, are finally convinced that this family is in dire need of their help.\n\nFurther on in the film, we learn the evil old man spirit and the Crooked Man are simply pawns of the true villain, Valak, and are aiding him in claiming Janet's soul. This is another thing the film does well that sticks out to me: it somehow managed to take three unique, seemingly unrelated demonic presences and weave their stories together, making them all relevant to the plot. In typical exorcism-themed type horror movies, there is typically one demonic presence that haunts the family, with a few residual spirits tied to the property by past trauma that serve little purpose other than to set up the plot's exposition and show that the house is haunted. This is one of the few movies I've seen where there are multiple demonic entities working together with the spirit of a prior resident of the house to cause harm to the family. It feels as if the lore around the antagonists was well thought-out and intentional -- they didn't just choose a random demon and unrelated historical spirit to haunt the house...they purposefully picked entities that had a reason to work together and haunt the family. The fact that these entities are powerful and intelligent enough to coordinate calculated attacks on the Hodgsons so Valak can take control of their daughter's soul makes them that much more of a force to be reckoned with. The evil in this film feels somehow...more EVIL than any evil in I've seen in other supernatural movies. The evil depicted in this film is a kind that makes you want to sleep with the lights on at night and look over your shoulder during the day. Even now, almost ten years after this film came out, watching it still gives me, a seasoned horror veteran, chills every time. I've seen this film so many times that, even though I've basically memorized where all they jump scares are, they get me every time. Its innovativeness and re-watchability have more than earned it a spot in S-tier. It is a shame to me that this masterpiece of a movie is eclipsed by its more popular counterparts, the original Conjuring and Annabelle. While these movies are still great watches, I don't think they hold a candle to the Conjuring 2. If you haven't watched it, I highly recommend you do, and if you love it as much as I do, spread the word about it! This movie is amazing and doesn't get near enough love.";
    const movTier = "S";
    
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
        //axios.post('https://testhelpme-cfh4afcpdreacnh8.canadacentral-01.azurewebsites.net/editEndpoint',formData)
        axios.post('http://localhost:8080/editEndpoint',formData)
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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for the conjuring 2"/>}
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

export default TheConjuring2;