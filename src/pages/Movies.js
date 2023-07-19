import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import MovieCard from '../Components/MovieCard';
import ClipLoader from 'react-spinners/ClipLoader';

const Movies = () => {
  // const movieTitle = useSelector((state) => state.movie);
  // console.log("무비타이틀", movieTitle)
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // console.log("Popular", popularMovies)
  let allMovies = [
    {...popularMovies},
    {...topRatedMovies},
    {...upComingMovies},
  ]
  console.log("전체영화",allMovies);
  const searchMovieTitle = (e) => {
    setSearchMovie(e.target.value)
    dispatch({type: "SEARCH_TITLE", payload: {searchMovie}})
  }
  // let list = popularMovies.results.map((it) => it.title);
  // console.log("리스트", list.includes(searchMovie));
  // let filteredList = allMovies.map((it) => it.results.filter((item) => item.title.includes(searchMovie)));
  // console.log("필터 리스트", filteredList)
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if(!searchMovie) {
      setFiltered(allMovies)
    } else {
      let filteredList = allMovies.map((it) => it.results.filter((item) => item.title.includes(searchMovie)));
      setFiltered(filteredList);
    }
  }, [searchMovie])
  // console.log("필터", filtered);

  if(loading) {
    return (
      <div className='loader'>
        <ClipLoader color="#f00" loading={loading} size={150}/>
      </div>
    )
  }
  return (
    <div className="Movies">
      <h1>검색하기</h1>
      <input onChange={searchMovieTitle} value={searchMovie} className='movieSearch' type='text' placeholder='원하시는 작품을 검색해보세요'/>
      <div className="movie_item" >
        {searchMovie !== "" ? filtered.map((it) => (
          it.map((item) => (
            <MovieCard item={item}/>
          ))
        )) : allMovies.map((it) => (
          it.results.map((item) => (
            <MovieCard item={item}/>
          ))
        ))}
        {/* {searchMovie !== "" ? "데이터 OOOOO" : "데이터 XXXXX"} */}
      </div>
    </div>
  )
}

export default Movies;
