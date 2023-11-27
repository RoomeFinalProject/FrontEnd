import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 

function NavTopBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    const userIsLoggedIn = false;
    setIsLoggedIn(userIsLoggedIn);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);


  // 카카오톡 로그인 start ===================================================================
  const KakaoLogin = () => {
    const REST_API_KEY = 'cbea547958731801aa27a424a24381fc';
    const REDIRECT_URI = 'http://localhost:3000/';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
    const loginHandler = () => {
      window.location.href = link;
    };
    return (
      !isLoggedIn && (
        <button type='button' onClick={loginHandler} className='btn btn-light'>
          로그인 하기
        </button>
      )
    );
  };
  // end ===================================================================

    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">룸메</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/youtube' >유튜브요약</Nav.Link>
              <Nav.Link as={Link} to='/research' >리서치요약</Nav.Link>
              <Nav.Link as={Link} to='/openchat' >오픈채팅방</Nav.Link>
              <Nav.Link as={Link} to='/help' >도와줘룸메</Nav.Link>
              <Nav.Link as={Link} to='/profile' >나의프로필</Nav.Link>
            </Nav>
            <Nav>
              <KakaoLogin />
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>
    );
  }
  
  export default NavTopBar;