import boo from './boo.png';

function WatchTesterPage(props){

  const user = props.watchInfo;

  const userName = user.name
  const blurb = user.blurb;
  const poster = user.poster;

  const handleError = (e) => {
        e.currentTarget.src = boo;
    };

  return (
    <div>
        <h1>{userName}</h1>
        <img src={poster} onError={handleError} alt="This is the movie poster for this movie."/>
        <pre className='paragraphStyle'>{blurb}</pre>
    </div>
  );
}

export default WatchTesterPage;