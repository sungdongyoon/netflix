import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Navigation = () => {
  // const movieTitle = useSelector((state) => state.movie);
  
  // const [movieSearch, setMovieSearch] = useState("");
  // const {popularMovies, topRatedMovies, upComingMovies, genreList, searchMovie} = useSelector((state) => state.movie);
  // let allMovies = [
  //   {...popularMovies},
  //   {...topRatedMovies},
  //   {...upComingMovies},
  // ]
  // console.log("movieTitle", movieTitle);
  // console.log("allMovies", allMovies);
  // console.log("searchMovie", searchMovie)
  
  // const dispatch = useDispatch();
  // const onSearch = (e) => {
  //   setMovieSearch(e.target.value);
  //   dispatch({type: "SEARCH_TITLE", payload: {movieSearch}});
  // }

  // useEffect(() => {
  //   if(movieSearch !== "") {

  //   }
  // }, [])

  const navigate = useNavigate();
  const goMovies = () => {
    navigate('/movies');
  }
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' width={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={'/'} className='nav-item'>Home</Link>
            <Link to={'/movies'} className='nav-item'>Movies</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              // onChange={onSearch}
              onClick={goMovies}
              // value={movieSearch}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
