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

function Insidious(props){

    const origMovName = props.origMovName;
    const movName = "Insidious";
    const movVal = "Release Date: 2011\n\nRating: 8.5/10\n\nOne of the most iconic horror movies of the 2010s, Insidious's debut hooked audiences and kicked off a multimillion dollar franchise. And for good reason; this movie's concept was not one yet seen in any major supernatural film until now. While most supernatural films keep a firm barrier between the worlds of the living and the dead, Wan blurs this barrier, allowing those who are living to cross into the spirit realm and the dead to cross into our world. This journey is accomplished via astral projection, a unique ability that can allow one to leave their physical body and enter the spirit realm. This unique gift is given to the film's main protagonist, a small child named Dalton, and it is this gift that is the initial catalyst for all of the spiritual attacks on the Lambert family.\n\nThe movie begins similar to many other supernatural movies; we see the innocent, happy Lambert family moving into their new house. It's clear they are excited about their new beginning, especially their youngest son, Dalton, who is eager to explore every nook and cranny in the new house. His unabashed bravery and naive lack of caution, while endearing, soon put him in danger when he starts exploring places he's not supposed to go. We first see a less extreme instance of this when Dalton, while exploring the attic, falls off a ladder and hits his head. Obviously, this startles his worried parents, but he soon gets it up and shakes it off, and we think nothing more of it.\n\nUntil the next morning.\n\nWhile making breakfast, Renai notices Dalton hasn't gotten up at his usual time. Worried that he'll miss school, she tells her husband, Josh, to go wake him up. Upon entering Dalton's room, Josh quickly discovers that Dalton is unresponsive to his voice or any external stimuli. This is one of the particularly poignant scenes in the movie; as Josh casually attempts to wake Dalton up, then becomes more and more frantic when he doesn't respond, we can see the dread in his face and feel his fear. Josh and Renai rush Dalton to the hospital, where the doctor informs them that Dalton is in a coma, but there is no sign of brain damage and all his scans are normal. This is the first hint the movie gives that what is going on could be supernatural, and it makes the viewer feel very uneasy. While the viewer obviously suspects a supernatural cause (this is a horror movie, after all), Renai and Josh are at a loss, overwhelmed with despair at their inability to help their child.\n\nThe timeline shifts to three months later, where we see Dalton still hasn't awoken from his coma. The Lambert family is tired and has seemed to have given up hope. Most deeply affected is Renai, who has to take care of her unresponsive son day in and day out. We see her resolve crumbling as she sits at her piano, attempts to play her song, and gives up after playing a few off-key notes. At this point, we are around a third of the way through the movie, and almost no supernatural activity has occurred yet. This brings me to one of my main critiques of the film: the pacing at the beginning is a bit slow. Yes, it's important to set the scene for the premise of the movie, and while I was intrigued as to what was happening to Dalton, I felt like some much-needed suspense was missing. Thankfully, at this point, the film finally picks up, and Renai experiences her first supernatural occurrence when she hears voices through her baby's monitor. She quickly runs up the stairs to investigate, and she hears a gravelly voice shouting \"I want it..I want it...I want it NOW!!!\" Horrified, she rushes into to Cali's room, only to see there's nobody there.\n\nAs this part of the movie progresses, we begin to see more and more supernatural occurrences. A lot of these mirror the classic supernatural scare tropes; lots of eerie shots of dark corners with sudden jump scares of mysterious spirits. There are a few instances that are particularly chilling, like when Renai sees the face of a scarred, mangled looking spirit in the window behind Cali's bed. Overall, however, none of the scares in this part of the movie were particularly memorable, which was rather disappointing. At this point, I was starting to tune out a bit, until one of the greatest characters in the movie, possibly the whole franchise, makes her debut: Elise, the cheerful, caring, yet formidable and badass psychic that comes to assist the Lamberts.\n\nAfter enough supernatural occurrences, Josh's mom, Lorraine (no relation to the Warrens), reveals these are not the first supernatural occurrences she's seen in her lifetime. When Josh was a kid, he experienced horrible nightmares of an old, haggard woman. Lorraine dismissed his stories...until she started showing up in pictures. This scene is actually one of the more eerie and impactful scenes in the movie; Lorraine proceeds to show Josh a series of photos of him as a kid with the old woman standing in the background. As she flips through the photos, the woman gets closer and closer to Josh, with the final photo showing her hand reaching out to grab Josh. For some reason, seeing ghosts in photos always gets to me, oftentimes more than seeing flashes of them in person in stereotypical jump scare style. I think it has to do with the fact that the ghosts are around you, in the room with you, and you don't even know it until you see the photo of them. Another reason I think this type of scare is more terrifying than most jump scares is its subtlety, something I've discussed in previous reviews. Oftentimes, in these photo-type scares, the ghost is rather murky and obscure, most of the time with only its silhouette visible in the background. I firmly believe leaving more to the imagination will always be more effective than any type of close-up image of the spirit. It seems again and again these directors attempt to up the scare factor by showing a close-up of the ghost with special effects, but I have never once seen this work; if anything, it makes the film seem cheap and cheesy by removing the spirit's element of mystery. It honestly has the opposite of the effect the directors intend, making the end of the movie less scary than the beginning in most cases. Unfortunately, while the middle of this movie is chock full of excellent, creative, subtle scares, Insidious falls victim to this trope near the end of the movie when it shows some ridiculous looking close-ups of the main antagonist, the demon targeting Dalton.\n\nWhile the climax of the movie is a bit cheesy with all of the close-ups of the demon, the overall plot at this point becomes very interesting, which I think ultimately saves it and makes this movie stick out in my mind. As I stated previously, this film has a unique concept I've never seen before; it is revealed that Josh, as a child, was plagued by the nightmares of the old woman because they weren't actually nightmares. Young Josh had the ability to astral project, so every night, when he went to sleep, he entered the spirit realm, dubbed by Elise as \"The Further.\" It was in the Further that he encountered the malevolent spirit of the old woman, who Elise revealed was trying to leach off of him in order to eventually take over his physical body. In order to protect Josh from the old woman, Elise hypnotized him, taking his memories away from the incident and his ability to astral project. Unfortunately, this never truly freed Josh from the grip of the old woman and the Further, as he passed down his gift of astral projection to Dalton. Elise tells the family that Dalton, during his nightly journeys to the further, wandered too far and got lost. With his physical body empty and exposed, a demonic presence has latched onto it, biding its time until Dalton's spirit became weak enough for it to enter Dalton's body. At this point, the main antagonist of the movie is introduced: the demon with \"fire on his face,\" more popularly known by Insidious fans as \"the red-faced demon.\" In his attempt to return to the Further to find his son, Josh enters a red door, which is the lair of the red-faced demon and where Dalton is trapped. It is at this point that we finally see the main thing, in my opinion, that makes Insidious great: the use of artfully chosen music to induce fear and dread. As Josh is unshackling his son, we get a terrifying close up of the demon sharpening his claws while Tiny Tim's \"Tiptoe Through the Tulips\" plays, and oh my God, this movie made me fucking HATE this song. I remember actually hearing it play on the radio a few months after I saw this movie, and I had to shut it off. Thanks to Wan, I can never, ever listen to Tiny Tim now without thinking of that goddamn red-faced demon. And that's the sign that this was an incredibly effective scare: this scene is forever seared into your brain, and you think about it long after watching the movie.\n\nUnfortunately, this is the scariest that the red-face demon gets; sadly (and as much as I hate to criticize Wan, since 90% of the time I think he makes excellent directorial decisions), they reveal the true form of the demon, and it cheesy as hell. Complete with a forked tongue, horns, and hooves, it looks like a shoddy Halloween costume or something you would see in a child's play. I actually laughed when I saw it because it reminded me of the demon in Tenacious D. If any horror movie villain reminds you of a villain in a Jack Black film, you have, unfortunately, completely invalidated the spirit as a threat. Another major critique I have is the complete discontinuity in the demon's appearance from when it was first revealed to the end of the film. In the scene where Specs makes a sketch of the demon (which, by the way, is another terrifying scene, 10/10), Elise describes the demon as having \"long, spindly fingers and hooves for feet.\" We obviously see this when we first encounter the demon in the Further; however, at the end of the movie, the demon is literally crawling sideways across the wall to reach Dalton. There's no way that he could do this with hooves, and upon watching this film a few times this discontinuity became very noticeable to me. While many aspects of this movie are extremely well thought-out, I feel Wan was rather careless and half-hazard when creating his antagonist. That doesn't mean he wasn't scary at times, he certainly was; however, it does kind of ruin the fear factor just a bit.\n\nIt was at this point that I thought the film was going downhill; thankfully, however, Wan saves it by re-introducing the old woman. To most people I've talked to and to me, I think the spirit of the old woman is far scarier than the red-faced demon. We actually forget about her at this point since we've been distracted by the antics of the red-face demon; however, right before Josh escapes the Further, he once again encounters the ghost of his past. This is where we get the first close-up of the old woman, and it is absolutely chilling. Her face is completely wrinkled and haggard, and for some reason it is caked in white makeup, making her look even more ghoulish. Her sunken-in face is obscured by a black veil, which we later learn is why she was called \"the black-veiled bride.\" Determined to, no pun intended, face his demons, Josh demands the old woman to tell her who she is. She gives him no response, simply staring menacingly at him through the window. This scene made me feel so uneasy, and at this point you realize that the true evil it the film isn't the red faced demon...it's her. Finally, we see her fade into the background as Josh continues yelling at her. It is at this point that both Josh and Dalton escape the Further, and we finally think everything is resolved. Thankfully, this isn't a Conjuring movie, so there is no happy ending (call me a bitter person, but I hate happy endings in horror movies). While Elise is packing up her stuff and leaving, she notices something is off about Josh. Quickly, as Josh is looking away, she snaps a picture of him and gasps, and at this point, we know that whatever came back from the Further was not Josh. In a fit of rage, he lunges at Elise, strangling her and screaming \"Why would you do that?? You know I don't like that, why would you do that???\" I like this detail because it calls back to another theme we've seen several times throughout the movie: the old woman hates having her picture taken. She hated it when Josh was a child, and she hates it now. I appreciated how intentional and well-thought out this was, and this is another little thing that makes the movie even better for me. Now we know for certain that the old woman came back instead of Josh, and the family is still in grave danger. The film ends with Renai picking up the camera, seeing the spirit of the old woman, and gasping. I absolutely love this part of the movie; it think it was a brilliant and artful way of setting the stage for a sequel. That's another thing I appreciate about this movie that I think differentiates it from other horror franchises: Wan planned for there to be a sequel, and he revealed that in the first movie. Honestly, most sequels seem like a half-assed attempt at a cash grab after the original movie was successful, and often (except in the case of the Conjuring 2) they aren't near as good. I respect Wan so much for articulately incorporating the lore and background of this movie to set up the next movie. To me, this reveals that the sequel wasn't a shitty cash grab, it was intentional and planned from the very beginning. For this reason, the sequel does not disappoint, as you'll see my review of Insidious Chapter 2.\n\nWhile this movie did have its pitfalls, I think there are enough impactful and terrifying elements that far overshadow its issues. With only a 1.5 million dollar budget (2.1 million in 2025 dollars), Wan created an entirely new, terrifying world complete with its own cast of terrifying spirits and lore. He not only excelled in creating antagonists; equally as important are a movie's protagonists, and Wan creates lovable and unique protagonists through Elise and her goofy assistants, Specs and Tucker. I also applaud the production team for artfully using camerawork, ambiance, and music to make what would have been a run-of-the-mill ghost movie into a truly horrifying experience. Overall, this movie will always have a special place in my heart since it was one of the first horror movies I watched, and there is a reason it's so popular amongst horror fans. If you haven't seen it yet, you must; it is a core piece of current horror movie culture and inspired many later movies.";

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
        if (specialCharsRegex.test(formData.movieName)){
            setMess("Movie name cannot contain non-alphanumeric characters.")
        }
        else if(/^[a-z]/.test(formData.movieName)){
            setMess("First word of movie name must be uppercase.")
        }
        else{
        setMess("Please wait, your review is loading.");
        //axios.post('https://tryingthisagain-e6f8d0gqfmgsevft.eastus2-01.azurewebsites.net/editEndpoint',formData)
        axios.post('http://localhost:8080/editEndpoint',formData)
        .then(response => setMess(response.data))
        }
    };

    const handlePageLoad = () => {
        if (prevPath === "/EditPage"){
            setVarVar(false);
        }
        else{
            setVarVar(true);
        }
    };

  useEffect(() => {
    handlePageLoad();
  },[]); // The empty dependency array ensures this runs only once

    return(
        <div>
            {varVar && <h1>{movName}</h1>}
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

export default Insidious;