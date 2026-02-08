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

function InsidiousChapter2(props){

    const origMovName = props.origMovName;
    const movName = "Insidious Chapter 2";
    const movVal = "Release Date: 2013\n\nRating: 9/10\n\nSomehow, after Insidious's smash hit debut, James Wan exceeded our expectations and make as sequel that's even better than the original. This makes sense, since he clearly set the stage for a sequel at the end of the first Insidious. Upon watching Insidious 2, I could immediately tell that the plot of this sequel was likely planned from the very beginning of the franchise. Wan beautifully integrated Insidious 2's lore with the first Insidious, weaving a cohesive and engaging story that kept you on the edge of your seat the entire movie. On top of this, he somehow managed to include an even scarier entity than the red-faced demon we saw in the first one: the old woman from the first movie, otherwise known as the Bride in Black.\n\nIf you recall from the previous film (for a brief plot synopsis, read the review of Insidious), upon returning from the Further, an evil and murderous entity attached itself to Josh and strangled Elise. The second movie immediately begins in the thick of the final scene from the first movie, with Renai frantically running around and trying to figure out who killed Elise. I appreciated the eye-catching and fast-paced introduction; a pet peeve of mine is when horror movies are too slow-paced in the beginning, as this is one of the critical periods where you need to engage the viewer to make them keep watching. This was actually a complaint I had about the first movie...I felt the first half of the movie was too slow and drawn-out, and I wish they had included a little more action. Insidious 2 absolutely does not fall victim to this, as we're kept on the edge of our seat from the very beginning. Truthfully, every minute of this movie either instilled a quiet sense of dread in me or outright terrified me, which is no small feat considering how terrifying the first one was. The Bride in Black, with her ghoulish face, crooked smile, and crazed, murderous eyes, is truly something straight out of my nightmares. Not only is she terrifying, she has her own traumatic backstory, which is something that the demon in Insidious lacked and something that makes her even more memorable. Or, should I say, he.\n\nThat's right: the Bride in Black is no bride; the face behind the veil is actually that of Parker Crane, an extremely traumatized man with SEVERE mommy issues. Parker Crane's story is truly one of the strangest and most fucked up stories I've ever heard. Apparently, his psycho mom had always wanted a girl, so she forced Parker to dress as a girl, play with girl's toys, and act like a girl. She was so committed to the act that she even changed his name from Parker to Marylin. Her influence over him was extremely powerful, so much so that she employed him to kill innocent people for her, ultimately turning him into the infamous serial killer known as the Bride in Black. Throughout his time on earth, the Bride in Black claimed 15 victims, storing them in a secret room behind his bookshelf which Lorraine, Specs, and Tucker discovered after his death. I must pause to say that the scene where Tuck, Specs, and Lorraine discover all of Crane's decaying victims, which he meticulously propped up in rows of chairs and covered in sheets, is one of the most disgusting and disturbing scenes in the movie. It's clear from the crew's reactions upon entering the secret room that the smell is absolutely rancid, as you can imagine what FIFTEEN decaying bodies smells like. I honestly wrinkled my nose and gagged at the mere thought of the smell, especially when Tuck lifted one of the sheets up, exposing one of the decaying corpses. This part of the movie shows how truly twisted Parker and his mother were. To not only indiscriminately kill innocent people, but to store them in a secret room in your house, is something so demented I can't even imagine what was going through their heads.\n\nA confusing aspect of the movie (and one that I slightly disagree with) is how Wan attempts to humanize Parker. When the real Josh navigates through the Further in an attempt to escape and return to his body, Elise informs him he must destroy Parker's memories to set him free. If you recall from the previous movie, Josh was hypnotized as a child and made to forget all his memories of the old woman, so he has no memory of where she could be located. Elise informs him that while he may not possess these memories, a younger Josh does, and adult Josh returns to his childhood home to find the past version of himself sitting in a chair, eyes closed, with a younger Elise and Lorraine looking at him with concern. If you recall from the first movie, this was the scene where little Josh stood up, looked over his shoulder, and said \"I'll show you.\" I really appreciate this callback to the previous movie, as it finally sheds light on why Josh seemingly talks to a random person over his shoulder. We finally learn that that random person was his older self attempting to find the memories of Parker Crane. Older Elise echoes this sentiment when little Josh points to the door where Parker's memories are contained, and she exclaims, voice filled with realization, \"so THAT'S what that was about.\" I absolutely loved this scene because we, the viewers, are right there with Elise, having the exact same \"aha\" moment as she does. I actually think I said \"AAAHHHH...\" right when Elise did. This is what I mean when I say Wan meticulously and beautifully incorporated the lore from the first movie into the second one; this seemingly random scene from the first movie had a purpose all along which was ultimately revealed in the second movie.\n\nNow that Josh finally located Parker's memories, he enters Parker's childhood bedroom to see young Parker, dressed as a girl, sitting on his frilly pink bedspread. As Josh and Elise watch, Parker's mother storms in holding a drawing that Parker signed with his own name. \"Did you make this?\" she asked, her heavily made-up face twisted into a terrifying glare. Parker nods slightly, and she goes ballistic, slapping him across his face and screaming \"YOUR NAME IS NOT PARKER!!! Your name is ~Marylin~. Say it with me: My. Name. Is. ~Marilyn~.\" It's clear through this scene that Wan is attempting to give Parker a traumatic backstory to show why he did what he did. I have no problems with giving Parker a backstory; I actually thought it was a creative way to explain his demented behavior. What I did not like, however, was when Elise attempted to \"set young Parker free.\" I think this insinuates that a part of Parker was still good and that he never truly wanted to kill, he only did it under the command of his evil and controlling mother. Throughout this movie, however, as we witness Parker (through Josh's human body) exhibiting psychotic and murderous behavior, we get no hint of remorse whatsoever. After witnessing the way he attacks Renai, Carl, and Lorraine, I don't want to feel any empathy for him, and it annoyed me how they tried to humanize him in the end and characterize him as a poor child who was ultimately a victim. Regardless of his messed up childhood or his mommy issues, it gives him absolutely no excuse to become a serial killer. So many people have past trauma that doesn't turn them into murderers; it takes someone truly psychotic and evil to commit the acts Parker committed. Because of this, I feel no sympathy for him, and I felt it would have been far more satisfying if Wan had somehow banished him to the Further forever, as I don't think he deserved to be \"set free.\"\n\nApart from this nitpick, everything else about his movie knocked it out of the park. The scares were creative, unexpected, and horrifying, and the every scene with the Bride in Black and his evil mother haunts me to this day. This is a movie that I can watch over and over again, and every single time I still get scared. James Wan has the unique ability to somehow make sequels that are better than the original, which is what makes him one of my favorite horror directors. It's unfortunate that he didn't direct the other Insidious sequels, as they don't even come close to measuring up to this one. I suspect Wan didn't direct any other sequels because he didn't plan on there being a sequel; the movie ends with Josh and Dalton being hypnotized to once again forget all their memories of the Further. While it's nice that they attempted to continue the franchise and expand upon the lore of the Insidious universe, a part of me thinks they should have ended it with this one, as Wan told every part of the story that needed to be told.\n\nAnyways, this is another movie that I highly recommend you watch. Prior to watching, however, I highly suggest you watch the first Insidious. Even if you've already seen the first one, it's really good to have the plot of the first one fresh in your mind, as the second one is basically a continuation of the first one. And be prepared to sleep with a nightlight on, because the Bride in Black will definitely haunt your dreams.";
    const movTier = "A";
    
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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BMTg0OTA5ODIxNF5BMl5BanBnXkFtZTcwNTUzNDg4OQ@@._V1_SX300.jpg'} alt="This is the movie poster for this movie"/>}
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

export default InsidiousChapter2;