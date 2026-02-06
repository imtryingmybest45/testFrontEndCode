function TierList(){
  const movieName = 'https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_SX300.jpg';
  return (
    <div className = 'largeTierList'>
      {/* Red Box */}
      <div className ='tierList'>
        <div className = 'inside1'></div>
        <div className = 'inside2'>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
            <img src={movieName} alt={"hello"}></img>
        </div>
      </div>

      <div className ='tierList'>
        <div className = 'inside1'></div>
        <div className = 'inside3'>
            <img src={movieName} alt={"hello"}></img>
        </div>
      </div>

    </div>
  );
}

export default TierList;