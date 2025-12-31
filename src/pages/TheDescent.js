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

function TheDescent(props){

    const origMovName = props.origMovName;
    const movName = "The Descent";
    const movVal = "Release Date: 2006\n\nRating: 8/10\n\nAs a self-proclaimed lover of supernatural horror, it isn't often that I find a non-supernatural horror film that induces the fear in me that a spooky apparition can. This film, however, is one of the few exceptions. This movie plays upon a fear more primal than that of the spirit world, a fear that plagues most of us: claustrophobia.\n\nReleased in 2006, this film follows six women on who go on a caving trip to the remote Appalachian mountains. Sarah, the main protagonist, recently lost her husband and her daughter in a traumatic car crash, and she reluctantly joins the other girls on the trip to distract her from her grief. The trip is led by Juno, an experienced caver with a sometimes reckless taste for adventure. Aiding her is Holly, an equally experienced caver. Level-headed and cautious, she serves as a foil to Juno and is often the voice of reason during particularly tricky/dangerous situations. The other girls are sort of just along for the ride, and, as bad as it sounds, are not memorable whatsoever. I don't mind when horror movies introduce non-essential characters for plot purposes (presumably to be killed at some point in the movie), but the characters have to be visibly distinguishable from each other given their lack of notability in the plot. While I don't necessarily think their acting was bad (much of it was actually quite good), for some reason they decided to cast THREE IDENTICAL-LOOKING BLONDE WOMEN. Couple this with the fact that, later on in the movie, they get separated in a dark cave, it is nearly impossible to tell them apart and follow each one's plot line. I truly don't understand the hair/makeup department's decision to let every one of them have the same hair color; it would have been so simple to just give a few of them wigs so it wouldn't be a nightmare telling them apart. I don't understand how the director was even able to tell them apart during production...if I were him, I would be constantly mixing them up. It doesn't help that they had the most stereotypical English names (Beth, Sam, Rebecca, etc). Even worse is the fact that the main protagonist, Sarah, also looks identical to them. Given that she's a pretty important character, it gets frustrating at times when we lose track of her amongst the sea of other blonde white women.\n\nDespite the director's lack of foresight in the casting department, he made up for it with the risky yet innovative decision to not reveal the cave monsters to the actresses before filming. You heard me right: the actresses had absolutely no idea what the creatures hunting them would look like, so their initial reactions to seeing them are 100% authentic. That, to me, is what makes their acting stand out so much; the palpable fear you can see in their faces and hear in their screams is real. Some people question the ethicality of this decision; they think that it was morally questionable to withhold this information from the actresses. I couldn't disagree more. Assuming all the actresses consented to it, I think this was a brilliant directorial decision, as it basically ensures that every actress's reaction is 100% genuine. So many horror actors have laughably fake reactions to seeing a villain, and it was a breath of fresh air to see the authenticity in these girls' reactions. Their blood-curdling screams and horrified faces put you right in that cave with them, and you can feel the same fear that they're feeling. I think the actors' relatability is what makes a great horror movie, and this movie nailed that to a tee.\n\nNow let's get to what you're really here for: the cave monsters. The cave monsters in this movie were absolutely horrifying. I truly commend the director for creating such grotesque and abominable creatures. They almost resemble Gollum in Lord of the Rings, but there ain't nothing precious about these creatures. Often reaching the size of a fully grown man, these cave-dwellers have impeccable climbing skills and hyper-sensitive hearing that makes them absolutely lethal hunters. One wrong move, one slip of the foot or too-loud breath, and these fuckers are immediately on top of you ripping you apart. Their only weakness is their lack of eyesight, which presumably was unneeded as they evolved to live in caves. Some of the women quickly discover this, allowing them to evade the creatures temporarily. This is, however, a horror movie, and unfortunately to qualify as a horror movie most of the characters must die. One by one, as the film goes on, they are picked off by the cave monsters until only Juno and Sarah remain.\n\nOne very important thing that I've forgotten to mention until now is that Juno is a truly hateable character. Because she felt that the normal caves were too touristy and boring, she led her friends (without their knowledge) to an untracked cave system and is ultimately the reason they got into this mess. She is the female equivalent of a man with tiny-dick syndrome. Not only is she deceitful, she is a coward, leaving Beth to die in an attempt to escape the cave monsters. We see that this was a grave mistake on her part near the end of the film when Sarah discovers her dying friend. As Beth lay bleeding out, she presents Sarah with a pendant that she yanked off of Juno's neck. Upon turning it over, Sarah reads very familiar inscription on it: \"love each day.\" This was a phrase her late husband said a lot, and it is at this point that she realizes that Juno had been having an affair with her husband prior to his death. At this point, we all just want Juno to die, and thankfully, at the end of the film, Sarah finally gets her sweet revenge. During the final moments of the movie, Sarah stabs Juno in the leg, leaving her to be eaten by the cave monsters while she escapes. When I first watched this around 10 years ago with my friends, I distinctly remember all of us cheering as she was ripped apart by the cave monsters. Scares aren't the only important aspect of a horror film; creating memorable characters, whether they're ones you actively route for or against, is equally as important, and this film has some goddamn memorable characters. Even upon seeing the actress that played Juno now, I am still filled with hatred and rage (unfortunate for her, as I'm sure she's a lovely person in real life). That's how you know a movie's great; when you see an actor from that movie and automatically associate them with the movie.\n\nAll in all, this movie really knocked it out of the park. Aside from some of the questionable casting decisions, every other aspect of this movie was exceptional: the pacing, the lighting and camerawork, the set, the acting...everything about this movie really embodied what it was like to be trapped in a cave and hunted in the dark. While this movie is popular among avid horror fans, it seems like the general public doesn't even know this movie exists. If you didn't know this movie exists, now you do, and you should go watch it.";

    const [varVar, setVarVar] = useState(true);
    let prevPath = props.name;

    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const specialCharsRegex = /[^a-zA-Z0-9\s]/;

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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_SX300.jpg'} alt="This is the movie poster for the descent"/>}
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

export default TheDescent;