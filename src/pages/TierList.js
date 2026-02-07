import { Link } from 'react-router-dom';

function TierList(props){

  let {linksData} = props;

  //const navigate = useNavigate();

  const handleImageClick = () => {
   // navigate(linkName);
   console.log("hello");
  };

  return (
    <div className = 'largeTierList'>
      {/* Red Box */}
      <div className ='tierList'>
        <div className = 'sTier'></div>
        <div className = 'sTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier == 'S') {
                    return (
                 <Link to={item.to}>
                    <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick()}></img>
                </Link>
                    );
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

      <div className ='tierList'>
        <div className = 'aTier'></div>
        <div className = 'aTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier == 'A') {
                    return (
                    <Link to={item.to}>
                        <img src={item.moviePoster} alt={"hello"}  onClick={handleImageClick()}></img>
                    </Link>
                    );
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

      <div className ='tierList'>
        <div className = 'bTier'></div>
        <div className = 'bTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier == 'B') {
                    return (
                    <Link to={item.to}>
                        <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick()}></img>
                    </Link>
                    );
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

      <div className ='tierList'>
        <div className = 'cTier'></div>
        <div className = 'cTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier == 'C') {
                    return (
                    <Link to={item.to}>
                        <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick()}></img>
                    </Link>
                    );
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

    </div>
  );
}

export default TierList;