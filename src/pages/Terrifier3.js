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

function Terrifier3(props){

    const origMovName = props.origMovName;
    const movName = "Terrifier 3";
    const movVal = "Release Date: 2024\n\nRating: 9/10\n\nALERT, ALERT: IT'S A CHRISTMAS REVIEW SPECIAL, BROUGHT TO YOU COURTESY OF APRIL!\n\nWell, my ghoul and monster-loving friends, it's Christmas again. And as is tradition (a tradition that actually just started last year, since this movie was released in October 2024), last night I watched my favorite Christmas movie: Terrifier 3.\n\nDespite the fact that this film has only been around for a year, I consider it to be a timeless classic. There's nothing better to get you in the Christmas spirit than watching our favorite Santa impersonator, Art the Clown, viciously murder men, women, and children. No creature, big or small, is free from his Christmas cheer (mostly conveyed via chainsaw in this movie). Much like Santa, he sees you when you're sleeping, he knows when you're awake. He knows if you've been bad or good, so be good for goodness' sake. This last line of the song is not as applicable as the prior lines, as Art does not care whether you have been bad or good; he will kill you regardless. Art takes the words of Romans 3:23 to heart: \"For all have sinned and fall short of the glory of God,\" so, in his mind, everyone is equal and deserves to be murdered. To quote Galatians 3:28, \"There is neither Jew nor Greek, neither slave nor free, nor is there male and female, for all shall be murdered by Art the Clown.\" (April Standard Version).\n\nWe see Art implement his philosophy of equality at the beginning of the movie when he dresses as Santa to drop by the house of a sweet, innocent family to spread some Christmas cheer. He first spreads his cheer to little Johny, who he viciously gores to death in his bed with an axe. Next, he spreads his cheer to the man of the house (no idea what his name is; honestly, it doesn't matter because he gets killed in two seconds) by again chopping him up with an axe. At this point, the unsuspecting mother wakes up to see her husband bleeding to death in the bed next to her while Art points and laughs. As many of Art's victims do, she makes a feeble (and,in my opinion, rather pathetic) attempt to escape. Art entertains her fantasies of evading him until he gets bored, then he finally axes her to death. With the entire family murdered, our Jolly Saint Art takes a little break to revel in his work while snacking on some much-deserved milk and cookies. And for good reason--he still has a lot of families to murder tonight, so he needs his energy. During this scene, to really kick off the tone of the movie and put us in the Christmas spirit, the classic Christmas hymn \"O Come, All Ye Faithful\" plays in the background. That's the thing that I love throughout this movie: despite the fact that it was released on Halloween, it's a Christmas movie through and through, and watching it always gets me in the Christmas spirit.\n\nThe joy continues when Art's decapitated body locates his severed head, which was recently birthed in a mental asylum by the now-possessed Victoria Hayes. Upon reattaching his head, he proceeds to viciously murder the asylum staff, then hop on a bus with his trusty sidekick to travel back to his lair. I must note that this scene was a flashback to five years ago right after the Miles County Massacre. After his killing spree, Art and Victoria decide to take a little break and proceed to sit motionless in his lair (which is an abandoned building in god knows where) for five years. Finally, after a long period of dormancy, two unsuspecting construction workers discover Art and Victoria during a routine building inspection. As is custom with anybody that runs into Art the Clown, he immediately kills both of them while Victoria watches. I must note that, while this movie is perfect in every other regard, I must deduct one point for this scene, as it is not very family friendly. While Art the Clown rips the scalp off of the construction worker, Victoria looks upon him in glee while pleasuring herself with a mirror shard. While myself and my friend found this hilarious, this is ultimately a family movie, and I didn't appreciate this scene being included in a family movie because it could corrupt the children watching. I would suggest that, if you're watching this with your children, to fast-forward through this part so as to not put any graphic images in their head.\n\nAnyways, after this brief look at what Art and Victoria have been up to for the last five years, we flash forward to catch up with Sienna, who's been in a mental asylum for the last year or so. Surprisingly, she experienced some mental health issues from almost being murdered and watching her mother die, so she needed a brief grippy sock vacation to get her ship-shape again. Now that she is completely healed from all of her trauma for good and has no mental health issues whatsoever, she's finally released to her uncle and aunt, who bring her back to their place for the holidays. Upon her arrival, Sienna is immediately greeted by her exuberant eleven-year-old cousin, Gabby, who gleefully tackles her in a hug after presumably not seeing her for several years. We then check in on John, who is somehow in college around the age of 14, presumably because he is a boy genius who managed to skip five grades. Seriously, though, this was a major and, in my opinion, unnecessary discontinuity in the Terrifier universe's timeline. Why Damien Leone decided to age John nine years in a span of five years and make him a college student is beyond me, but whatever floats his boat, I guess. I must say that, while it is a glaring discontinuity in the timeline of the series, it is rather funny seeing a clearly 14-year-old John surrounded twenty-something college kids. But I digress. The important thing to gather from this scene that all is well in the Shaw family, and everyone has completely moved on from the massacre, leaving Art and his minions in his past, never to be encountered again /s.\n\nObviously, I jest. Now that Art has awoken from his brief nap, he's back at it again. Upon awaking from his slumber, he realizes that it's Christmastime, and he's not dressed for the occasion! This simply won't do, so Art's first stop is to a bar where Santa impersonator is celebrating Christmas Eve with his friends. After engaging in some laughs and merriment with Santa and his buddies, Art's finally had enough, so he shoots Santa's friends and ties up the Santa impersonator (who we learn is named Charles; again, it really doesn't matter) to torture and kill him. Up to this point, you're probably wondering where Art's flair for creativity has gone, as he's only used traditional weapons to murder people so far. Well, fear not, for Art's innovativeness knows no bounds, and he produces a contraption he made himself: a can of liquid nitrogen with a hose attached. He sprays Charles, who is begging for his life at this point, with the nitrogen, immobilizing and silencing him by freezing him. Now that Charles is frozen, Art notices that the bar is a bit sparse and decides that it needs some Christmas decorations! A snowman would be a perfect decoration, but, unfortunately, there's no snow to be found. This doesn't stop Art, however, since he has the perfect canvas right in front of him. He smashes Charles's frozen hands, cuts off his legs, and rips off his face. Admiring his work, he realizes no snowman is complete without a nose, so he grabs a carrot off a neighboring snowman decoration to adorn his new creation. Finally satisfied with his interior decorating, he's off to the mall for some last-minute Christmas shopping.\n\nApparently Sienna and Gabby are procrastinators, too, because they also needed to do some last-minute shopping. While shopping in a department store at the mall, Sienna notices a jolly-looking fellow with a Santa mask walking with a very familiar sack. At this same instant, our favorite song from the franchise, the smash hit \"Clown Cafe\" plays at full volume over the store speakers. It is at this point that Sienna realizes she is still not free from Art's grip, and she proceeds to have a panic attack in the middle of the store. Frankly, I believe she was being a bit overdramatic, but I digress. Anyways, Art decides the vibe in the mall was a little too bah-humbug for him, and he needs to spread a little more Christmas cheer. What better way to do this than to impersonate a mall Santa! As we all know, Art the clown is a very generous fellow, so he hands out gifts to all the little children. One lucky child receives a box with a bomb in it, which immediately detonates upon him opening it, slaughtering him and five other people.\n\nThis horrific attack obviously makes the news, and when Sienna hears it reported over the TV, it confirms her gut suspicion that Art has returned. She knows that Jonathan is and the rest of her family is in grave danger, and she needs to get the magic sword her dad gave her FAST. She realizes she left it at the Terrifier in the massacre five years ago, so she returns to the abandoned ride to retrieve her knife and prepares for battle. While waiting in her bed and praying Art doesn't find her and her family, she drifts off to sleep and has a dream about her father. In her dream, she is a young child, and her father shows her the character he drew for her: a powerful angel warrior, complete with the mythical magic sword that would be used to defeat Art the Clown. At this point, we know that Sienna is the chosen one, and she was meant to destroy Art from the very beginning. She is then awoken from her slumber by people that sound like her aunt and uncle arguing in the kitchen, and upon going downstairs to investigate, she is confronted with her worst nightmare: Art and Vicky are back. She attempts to run upstairs to warn her family, but she isn't quick enough to evade Art, and he pummels her with a mallet, rendering her unconscious. She awakens to find her aunt tied to a chair across from her. Terrified, she scans the room and sees her uncle's decapitated body nailed to the wall with the words \"ho, ho, ho!\" written in his blood. Again, we see Art's flair for interior decorating and his love of the Christmas season here, which I absolutely love for him. Art, ever a thoughtful fellow, also got Sienna and her aunt a gift: Gabby's decapitated head! With nothing left to live for, Sienna's aunt cries out in despair, and she is killed through a very creative application of Egyptian rat torture. Normally, this form of torture is executed by tying the victim to the floor, putting rats covered with a bowl on their stomach, and placing a hot coal on the bowl so the rats are forced to chew through the victim's bowels to escape. This form of torture, while tried and true, was a bit too bland for Art, so he decided to spice it up a bit by hammering a tube into the aunt's open mouth and sending the rats down the tube to slither down her gullet and chew through her insides. As they flee from the blowtorch at the top of the tube, we see them writhing in her throat, and Vicky slits her throat to free them, her blood spilling out onto the floor.\n\nWith one of her last remaining family members dead, Sienna cries out in defeat, only for it to be revealed to her that the skull in the cage is not Gabby's--it's Jonathan's. She cries out in pain and rage, and Victoria knows that now is the chance to populate her new host. It is at this point that she screams my absolute favorite lines in this movie: \"That's it, everything you love is gone! There is no hope, there is no God, so just give up and let me in!\" It's so dramatic, but I absolutely love it; those lines are iconic. Sienna, however, will not go down without a fight. She resists the demon's attempt to enter her body, frees herself with the magic sword she cleverly disguised as a Christmas present, and slays Victoria once and for all. She then turns her attention to Art, commencing one of the most memorable fights in the movie where Art chases Sienna around the kitchen with a chainsaw while Gabby hides behind the Christmas tree in terror. She finally corners Art against the wall and stabs him, screaming in rage while she looks into his eyes. We're all cheering for her at this point, because she finally defeated Art for good and all is well.\n\nWait, you actually believed me? You realize this is a Terrifier movie, right? By the laws of physics and the universe, it can't have a happy ending, that's the rule. So, while Sienna is preoccupied with Art, somehow the demon's decapitated corpse turns into some type of acid and melts the floor. The floor falls out, exposing the opening to a red, glowing abyss that we can only assume is hell. Don't ask questions, this is Leon's masterpiece. Gabby, of course, falls into the pit, and in a fruitless attempt to save her, Sienna abandons Art for a second. Sienna fails to save Gabby and she is swallowed by the pit, presumably (but hopefully not) gone forever. As she sit and stares at the floor in resignation and despair, she looks back at the window, only to see Art has escaped. The words of the late Victoria ring true: everything she loves is gone, there is no hope, and there is no God. So, happy ending!\n\nSeriously, though, this movie was great. It's the perfect combination of scary and campy that makes for a fun and engaging watch. Additionally, this is the only Christmas horror movie that I know exists, so it finally gives me an excuse to watch a horror movie on Christmas Eve (not that I needed one, it just fits the mood a little bit better than my previous go-to holiday movie, The Conjuring 2). Everyone says this movie is horrific because it's too gory, but I don't necessarily agree. While there obviously is a lot of gore, it's not very realistic, almost making a lot of Art's murder scenes funny because they're so exaggerated and ridiculous. I truly think that, while Dameon had fun writing Art's torture scenes, his true focus of the Terrifier movies is Sienna's story. He stated himself that Sienna was a character he always wanted to make, and I see why; she's the perfect heroine: selfless, brave, and badass. I'm glad Dameon brought his vision to life through this movie, and while there are some discontinuities and confusing parts, I appreciate his creativity and ability to make an original story with compelling characters.\n\nAnyways, enough rambling from me. If you haven't seen this movie, got watch it, and have a Terrifier Christmas!";

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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
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

export default Terrifier3;