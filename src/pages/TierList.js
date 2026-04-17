import { Link } from 'react-router-dom';
import boo from './boo.png';

function TierList(props){

  let setInfo = props.setInfo;
  //const users = props.usersApp;
  const users = JSON.parse(localStorage.allData);

    const handleError = (e) => {
        e.currentTarget.src = boo;
    };

    const logClick = (value) => {
        setInfo(value)
    };

  return (
    <div className = 'largeTierList'>
      {/* Red Box */}
      <div className ='tierList'>
        <div className = 'sTier'>
            <p className = 'theTierFont'>S</p>
        </div>
        <div className = 'sTierList'>
            {Object.entries(users).map(([key,value]) => {
                // Use a standard if/else block within the IIFE
                if (value.tier === 'S') {
                    if (value.fullReview ==='1'){
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} className = 'longReview2' onError={handleError}></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} onError={handleError}></img>
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
            {Object.entries(users).map(([key,value]) => {
                // Use a standard if/else block within the IIFE
                if (value.tier === 'A') {
                    if (value.fullReview ==='1'){
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} className = 'longReview1' onError={handleError}></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} onError={handleError}></img>
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
            {Object.entries(users).map(([key,value]) => {
                // Use a standard if/else block within the IIFE
                if (value.tier === 'B') {
                    if (value.fullReview ==='1'){
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} className = 'longReview2' onError={handleError}></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} onError={handleError}></img>
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
        <div className = 'cTier'>
            <p className = 'theTierFont'>C</p>
        </div>
        <div className = 'cTierList'>
            {Object.entries(users).map(([key,value]) => {
                // Use a standard if/else block within the IIFE
                if (value.tier === 'C') {
                    if (value.fullReview ==='1'){
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} className = 'longReview1' onError={handleError}></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} onError={handleError}></img>
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
        <div className = 'dTier'>
            <p className = 'theTierFont'>D</p>
        </div>
        <div className = 'dTierList'>
            {Object.entries(users).map(([key,value]) => {
                // Use a standard if/else block within the IIFE
                if (value.tier === 'D') {
                    if (value.fullReview ==='1'){
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} className = 'longReview2' onError={handleError}></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} onError={handleError}></img>
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
        <div className = 'fTier'>
            <p className = 'theTierFont'>F</p>
        </div>
        <div className = 'fTierList'>
            {Object.entries(users).map(([key,value]) => {
                // Use a standard if/else block within the IIFE
                if (value.tier === 'F') {
                    if (value.fullReview ==='1'){
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} className = 'longReview1' onError={handleError}></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} onError={handleError}></img>
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
        <div className = 'noTier'>
            <p className = 'theTierFont'>NO</p>
        </div>
        <div className = 'noTierList'>
            {Object.entries(users).map(([key,value]) => {
                // Use a standard if/else block within the IIFE
                if (value.tier === 'NO') {
                    if (value.fullReview ==='1'){
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} className = 'longReview2' onError={handleError}></img>
                        </Link>
                        );
                    }
                    else{
                        return (
                        <Link key={value.name} to={'/TesterPage'} onClick={()=>logClick(value)}>
                            <img src={value.poster} alt={"hello"} onError={handleError}></img>
                        </Link>
                        );
                    }
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