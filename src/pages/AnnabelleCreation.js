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
    const movVal = "Release Date: 2017\n\nRating: 9.5/10\n\nThroughout my years as a horror movie buff, there have been plenty of movies that seem much more lackluster upon their second viewing through the lens of an older, more cultured April. This is one of the few movies that, upon rewatch, made me go back and drastically improve its rating. I don't know what I was thinking when I rated this movie so poorly upon its first viewing...I must have been in a crabby mood that day or something. Annabelle: Creation is possibly one of the most well-done and terrifying prequels I've ever seen. I would consider myself pretty desensitized to supernatural horror, as that's the main kind of horror I watch; however, this was one of the few supernatural movies that made me curl up in a ball and cringe as an adult. Even from the start of the movie, there was a quiet sense of dread permeating the atmosphere that made me sink further and further into my couch. If you thought that godforsaken doll was scary in the first movie, it's downright horrifying in this one.\n\nAs you may have guessed, the origins of the infamous Annabelle doll go much further back than the 1960s. The doll was created in 1943 by small-town toymaker Samuel Mullins to represent the likeness of his daughter (whose name was, unsurprisingly, Annabelle). In the first scene of the movie, we see Mullins meticulously crafting every part of the doll, from its bulging eyes to its ghoulish smile. Even before the doll gets possessed and turns evil, it looks impressively creepy. One thing I always find funny in these doll-themed horror movies is that the child who receives the doll never seems to notice how creepy-looking the doll is. I don't know if the children are stupid or extremely unobservant or both, but the dolls in these movies always look like something that should be soaked in holy water and burned. As if her evil smile and psycho eyes aren't enough, she's about half the size of a small child, standing around 2.5 ft tall with the legs fully extended. Why on God's green earth Mr. Mullins thought any child would want such a doll is beyond me, but it doesn't matter, because his little Annabelle seems to love it. As a side note, it would be really funny if, in one of these movies, as soon as the child was gifted the doll, they screamed and threw it in the fire. That would be a much more rational and realistic reaction, in my opinion, but then we wouldn't have any movie. So obviously the child who receives the doll must be as stupid and oblivious as the adults who gift them the doll. Stupid people are what make horror movies entertaining, after all.\n\nSpeaking of stupid, at the beginning of the movie, little Annabelle is dumb enough to get hit by a car, so that's where the token traumatic backstory originates. Many years later, in an attempt to move on from their daughter's death and bring some light back into their lives, the Mullins invite a small group of orphans to stay with them in their spacious farmhouse. The troupe of orphan girls is lead by a young nun, Sister Charlotte, whose devotion to God is almost as deep as her devotion to the girls. We are then introduced to the main characters, little Janice and her best friend, Linda. While these girls are very sweet, whoever wrote their characters clearly has never been around 8-year old girls. Janice and Linda were sitting still, playing with their dolls, and being laughably nice and respectful to each other. When my friends and I were that age, we would have been ripping the dolls' heads off and trying to throw each other out the car window, but I digress. The point is that Janice and Linda are very close; so close, in fact, they make a pact that if one of them gets adopted, the other one comes with, no exceptions.\n\nUpon arriving at the house, the girls are flabbergasted at its size and opulence. Multiple floors, a television, a radio, and a chairlift--this house had everything and more. You might have paused briefly at the word \"chairlift,\" as such a contraption wasn't commonly featured in 1950s houses, if ever. It turns out Mr. Mullins installed the chairlift for his wife to use after a mysterious \"accident\"--one that has somehow rendered her bedridden and mangled half of her face so badly it must be covered with a Phantom of the Opera-esque shard of mask. Obviously, this means that the entity in this movie disguises itself as Mrs. Mullins throughout the movie to scare the children, because what else are you supposed to do with a mysterious, recluse person whose face is covered with a mask? While I jest at this movie's use of a common horror movie trope, I must point out that it was very well done. In the past, I've complained about the use of overused scare methods in ghost movies, and while I believe that horror movies should attempt to formulate original scare tactics, I care more about the quality and impact of the scare than its originality. While this movie does use many common ghost movie tropes, it leans into subtlety (especially at the beginning of the movie) and executes them extremely well. Many of this movie's scares had me thinking, \"I've seen this type of thing a billion times, I know what's going to happen, so why am I covering my eyes and cowering into my couch cushions?\" One such scene that comes to mind when writing this is a scene near the middle of the movie where Janice is lured into Annabelle's old room by the entity (at this point disguised as Annabelle herself). While exploring the room, she finds a key in a dollhouse that seems to unlock some type of wardrobe. Upon unlocking the wardrobe, she finds a bone-chilling display: the godforsaken Annabelle doll, propped up in a chair in the center of the wardrobe, smiling menacingly at her, surrounded by scripture and crosses. Unnerved, Janice stares at the doll for a beat, then quickly locks the wardrobe. For some reason, she decides to continue exploring the room, which is insane, because any reasonable person would've noped the fuck out of there after seeing that monstrosity. Thankfully, her encounter with the Annabelle doll was a one-off incident, and the wardrobe never opened again.\n\nObviously, this is a lie. A few seconds later, the wardrobe somehow becomes unlocked again, and the door swings open. Janice, thoroughly freaked out at this point, grabs a sheet, throws it over the Annabelle doll (as if that's going to stop it), and shuts the wardrobe. Unsurprisingly, the wardrobe once again comes unlocked, and the door swings ajar just enough to see the cloaked silhouette of the doll illuminated by the soft glow of the room's nightlight. Janice, preoccupied with snooping through Annabelle's diary, fails to notice the figure beneath the sheet slowly stand up. I must say, at this point, I was absolutely shitting myself. Yes, I knew the cloaked figure was going to walk slowly towards Janice while her back was turned. Yes, I knew Janice would suddenly turn around to see it in a typical jump-scare fashion. Yes, I knew that somehow the sheet would get pulled off to reveal nothing underneath. That doesn't change the fact that watching this excruciatingly slow and suspenseful scene made me want to scream and jump out my window. As I said, a scare doesn't necessarily have to be original to be effective; if done right, a simple sheet with nothing underneath can be just as scary (or scarier) than thousands of dollars spent on special effects. Honestly, the director didn't have to do a ton of work to up the scare factor; that doll is so damn creepy that even having it show up in random places around the house is enough to make you want to shit your pants. And that's exactly what he did--once that wardrobe was unlocked, it's as if Janice set the demon free, and the Annabelle doll began appear suddenly in random locations without anybody having moved her. In fact, throughout the movie, we never actually see the doll move on its own, which is a nice touch, because doing so would remove a lot of the mystery surrounding the doll. I honestly don't think that there's any possible way they could show the doll moving without making it laughably cheesy, so it's smart they kept to having some unknown entity move the doll off-screen. Just the fact that you know something is attached to the doll and communicating harmful intent through it is enough to make you weary of it; nothing else needs to be added. Any reasonable person would stay away from that doll, and anyone who doesn't is either stupid or possessed by a demon. We can obviously see that Janice is already the former; however, towards the end of the movie, she becomes the latter in a typical possession scene that, in my opinion, had a lot of potential during the build-up, but fell flat in the end.\n\nSo, what about this scene made me deduct a half a point from an otherwise immaculate movie? As I've stated, it starts off with a lot of potential: Janice is sitting in her wheelchair, gazing off at the farmhouse in the distance, when suddenly she feels herself being pushed. At first glance, Janice sees the boots of a young woman and thinks it is Sister Charlotte; however, when she calls out to her, she receives no answer. When she turns around to see who is rapidly pushing her toward the farmhouse, she sees the silhouette of a nun, but the bright sun obscures her face in shadow. For some reason, when I watched this part a year and a half ago, I thought it was too over-the-top; however, upon watching it now, I think this scene was very well done. The nun strikes that uncanny-valley vein just right; she is human-looking enough for you to believe at first that it's Sister Charlotte, but her eerie silence and rapid, aggressive movements soon suggest she is something else entirely. Screaming in protest, Janice tries to stop the wheelchair, but it is too late; the unknown nun entity abruptly tilts the wheelchair forward, tossing her in the farmhouse and locking the door. Janice sits in silence alone, heaving and panickedly looking around to see who (or what) was in there with her, when she hears a thumping, almost like footsteps, coming from the boards above her. Before she can run and hide, the appears on top of her, and she screams in terror. If you've seen many supernatural movies, you can probably guess what happens next: the Annabelle ghost-demon thing vomits some type of black goo into Janice's mouth, signifying she is now possessed by the demonic entity. As I've stated previously, while I enjoyed almost everything about this movie, this one scene particularly annoyed me (and it's a gripe I have about many other supernatural movies that do this). What is it, specifically, about black goo that signifies possession? Why does the demon have to do the most blatant, obvious, and invasive thing to possess someone? Can't it do something more hands-off and subtle, like make her breathe in a mist of some type? Or maybe trick her into reading some type of incantation aloud, unknowingly inviting it in? That would be far more creative and less obvious than using the most contrived possession method that every single horror movie since the Exorcist has used. Despite this slip-up, the rest of the movie picks up and is downright terrifying after this part. Janice, now possessed by the demon, becomes suddenly attached to the Annabelle doll (see? I told you anyone who voluntarily goes near that doll is stupid or possessed). She carries it around with her everywhere and starts saying cryptic, threatening-sounding things to Mr. Mullins and the girls. Once Linda suspects that she's possessed and tries to escape, all hell breaks loose, and the deranged Janice attempts to slaughter Linda and the other girls with a knife, chasing them around and declaring that she'll take their souls. Linda and Charlotte have no other choice but to lock Janice in Annabelle's old wardrobe and flee the scene, never to be seen again.\n\nSo...what happens to Janice, then, and the Annabelle doll? Obviously, the some dumbass police officers stumble across her in the wardrobe, and make the grave mistake of sending her (and her abominable doll) to another orphanage. One idiot couple, whose last name you may recognize (does \"Higgins\" ring a bell?) decide to adopt the little monster. Janice, however, has decided that new digs means a new name, and what could be a better name than--you guessed it--Annabelle??? Annabelle Higgins...has a nice ring to it, doesn't it? Obviously, we have now come full circle to the first movie, and we understand that the mysterious, murderous estranged daughter of the Higgins was none other than the possessed Janice, still attempting to claim the souls of innocent victims with her creepy doll sidekick. Seriously, though, I really did appreciate how intricately they tied the Annabelle lore back to the first movie. I feel that a lot of prequels make tenuous, not very believable connections between the characters in the story just so they can claim that the prequel is part of the franchise's universe and make a quick buck, but this movie very well-integrated the lore from the first movie into the second one. While I could tell that this prequel was not originally planned when writing the original series like the Insidious movies were, I don't necessarily think it felt out of place in the Conjuring Universe. Many of the connections they made between this movie and the previous movie felt natural and made sense, which is what generally makes a solid prequel. All in all, I thought this movie was well-thought out and executed, and most of all, SCARY. Seriously, don't watch this at night. And especially don't make the mistake of watching it alone like I did. You'll be hiding in a fortress of blankets and looking over your shoulder for a week straight.";

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