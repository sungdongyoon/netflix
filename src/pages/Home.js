import React, { useEffect, useState, CSSProperties } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Components/Banner';
import MovieSlide from '../Components/MovieSlide';
import ClipLoader from 'react-spinners/ClipLoader';

const Home = () => {
  const [selectGenre, setSelectGenre] = useState("");
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies, loading, genreList, selectedGenre} = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // console.log("gernList", genreList)
  console.log("popular", popularMovies);

  const select = document.querySelectorAll("select");
  select.forEach((it) => {
    it.innerHTML = `${genreList.map((genre) => `<option>${genre.name}</option>`)}`;
  })
  const onSelectGenre = () => {
    console.log(selectGenre);
    dispatch({type: "SELECT_GENRE", payload: {selectGenre}});
    setFilteredGenre(selectGenre);
  }

  console.log("장르모음", genreList);
  console.log("장르", selectGenre);
  const [filteredGenre, setFilteredGenre] = useState([]);
  // useEffect(() => {
  //   if(selectGenre) {
  //     popularMovies.results.map((it) => (
  //       it.genre
  //     ))
  //   }
  // }, [])
  console.log("선택된 장르", filteredGenre);

  // loading이 true면 loading spinner를 보여주고
  // loading이 false면 데이터를 보여준다
  // true: 데이터 도착 전
  // false: 데이터 도착 후
  if(loading) {
    return (
      <div className='loader'>
        <ClipLoader color="#f00" loading={loading} size={150}/>
      </div>
    )
  }
  return (
    <div className='slide'>
      <Banner movie={popularMovies.results[0]}/>
      <div className='popular'>
        <div className='popular_title'>
          <h1>Popular Movie</h1>
          <select onClick={onSelectGenre} onChange={(e) => setSelectGenre(e.target.value)} value={selectGenre}>
            <option>genre</option>
          </select>
        </div>
        <div>{selectGenre}</div>
        <MovieSlide movies={popularMovies}/>
      </div>
      <div className='topRated'>
        <div className='topRated_title'>
          <h1>Top rated Movie</h1>
          <select onClick={onSelectGenre} onChange={(e) => setSelectGenre(e.target.value)} value={selectGenre}>
            <option>genre</option>
          </select>
        </div>
        <MovieSlide movies={topRatedMovies}/>
      </div>
      <div className='upcoming'>
        <div className='upcoming_title'>
          <h1>Upcoming Movie</h1>
          <select onClick={onSelectGenre} onChange={(e) => setSelectGenre(e.target.value)} value={selectGenre}>
            <option>genre</option>
          </select>
        </div>
        <MovieSlide movies={upComingMovies}/>
      </div>
    </div>
  )
}

export default Home;
