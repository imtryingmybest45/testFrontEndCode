import boo from './boo.png';
import {useEffect} from 'react';

function TesterPage(props){

  const user = props.info;

  const userName = user.name
  const review = user.review;
  const poster = user.poster;

  const handleError = (e) => {
        e.currentTarget.src = boo;
    };

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <div>
        <h1>{userName}</h1>
        <img src={poster} onError={handleError} alt="This is the movie poster for this movie."/>
        <pre className='paragraphStyle'>{review}</pre>
    </div>
  );
}

export default TesterPage;