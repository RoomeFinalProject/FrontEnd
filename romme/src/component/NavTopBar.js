import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavTopBar() {
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
          </Container>
        </Navbar>
        <br />
      </>
    );
  }
  
  export default NavTopBar;