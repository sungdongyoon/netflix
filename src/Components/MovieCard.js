import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({item}) => {
  const {genreList} = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/movie/${item.id}`, {
      state: {
        value: {item},
        genreList: {genreList}
      }
    });
  }
  // console.log(genreList)
  
  return (
    <div className='card'
    style={{backgroundImage: 'url(' + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path}` + ')'
  }} onClick={goDetail}>
      <div className='overlay'>
        <h1>{item.title}</h1>
        <div className='card_genres'>
          {item.genre_ids.map((id) => (
            <Badge className='card_genre' bg='danger' key={id}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div className='card_info'>
          <span className='card_vote'>
            <FontAwesomeIcon icon={faStar} style={{marginRight: 5}}/>
            {item.vote_average}
          </span>
          <span className='card_adult'>{item.adult ? "청불" : "All"}</span>
        </div>
      </div>
    </div>
  )
}


export default MovieCard;
