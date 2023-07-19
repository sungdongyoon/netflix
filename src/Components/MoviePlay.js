import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoviePlay = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className='MoviePlay_container'>
      <div>
        <iframe className='iframe' width="1280" height="720" src="https://www.youtube.com/embed/Ef1TBzqgLk4" title="[트랜스포머: 비스트의 서막] 2차 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      <button className='backBtn'>뒤로가기</button>
    </div>
  )
}

export default MoviePlay;
