import { Link } from 'react-router-dom';
import {useEffect} from 'react';

function TierList(props){

  let {linksData} = props;
  let setTFVar = props.age;
  let setPrevPath = props.setPrevPath;

 const handleImageClick = () => {
    setTFVar(false);
  };

 useEffect(() => {
     setPrevPath("/TierList");
 },[setPrevPath]);

  return (
    <div className = 'largeTierList'>
      {/* Red Box */}
      <div className ='tierList'>
        <div className = 'sTier'>
            <p className = 'theTierFont'>S</p>
        </div>
        <div className = 'sTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier === 'S') {
                    if (item.longReview ==='Y'){
                        return (
                        <Link to={item.to}>
                            <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick} className = 'longReview'></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link to={item.to}>
                            <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick}></img>
                        </Link>
                        );
                    }
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

      <div className ='tierList'>
        <div className = 'aTier'>
            <p className = 'theTierFont'>A</p>
        </div>
        <div className = 'aTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier === 'A') {
                    if (item.longReview ==='Y'){
                        return (
                        <Link to={item.to}>
                            <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick} className = 'longReview'></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link to={item.to}>
                            <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick}></img>
                        </Link>
                        );
                    }
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

      <div className ='tierList'>
        <div className = 'bTier'>
            <p className = 'theTierFont'>B</p>
        </div>
        <div className = 'bTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier === 'B') {
                    return (
                    <Link to={item.to}>
                        <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick}></img>
                    </Link>
                    );
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

      <div className ='tierList'>
        <div className = 'cTier'>
            <p className = 'theTierFont'>C</p>
        </div>
        <div className = 'cTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier === 'C') {
                    return (
                    <Link to={item.to}>
                        <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick}></img>
                    </Link>
                    );
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

    <div className ='tierList'>
        <div className = 'dTier'>
            <p className = 'theTierFont'>D</p>
        </div>
        <div className = 'dTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier === 'D') {
                    return (
                    <Link to={item.to}>
                        <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick}></img>
                    </Link>
                    );
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

    <div className ='tierList'>
        <div className = 'fTier'>
            <p className = 'theTierFont'>F</p>
        </div>
        <div className = 'fTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier === 'F') {
                    return (
                    <Link to={item.to}>
                        <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick}></img>
                    </Link>
                    );
                } else {
                    return null; // Must return null or some other element if the condition is false
                }
            })}
        </div>
      </div>

    <div className ='tierList'>
        <div className = 'noTier'>
            <p className = 'theNoTierFont'>NO</p>
        </div>
        <div className = 'noTierList'>
            {Object.values(linksData).map(item => {
                // Use a standard if/else block within the IIFE
                if (item.tier === 'NO') {
                    return (
                    <Link to={item.to}>
                        <img src={item.moviePoster} alt={"hello"} onClick={handleImageClick}></img>
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