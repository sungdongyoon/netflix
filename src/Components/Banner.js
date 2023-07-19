import React from 'react';

const Banner = ({movie}) => {
  // console.log(movie)
  return (
    <div className='banner' style={{backgroundImage: "URL(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}`+ ")",
    }}>
      <div className='banner-info'>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
      <iframe className='iframe' src='https://www.youtube.com/embed/Ef1TBzqgLk4?amp;autoplay=1&mute=1&controls=0&loop=1&playlist=Ef1TBzqgLk4'></iframe>
    </div>
  )
}

export default Banner;
