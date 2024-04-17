import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const[scrolled, setScrolled] = useState(false)

    //Set scrolled if user scrolls more than 50% on y axis
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        //listener that fires on "scroll" event using onScroll function.
        window.addEventListener("scroll", onScroll)

        //remove listener when component is removed from the DOM
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src = {''} alt = "Logo" />
        </Navbar.Brand>
        <Navbar.Toggle> aria-controls="basic-navbar-nav" 
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
                <div className='social-icon'> 
                    <a href="#"><img src={''} alt="" /> </a>
                    <a href="#"><img src={''} alt="" /> </a>
                    <a href="#"><img src={''} alt="" /> </a>
                </div>
                <button className='scroll-to-skills' onClick={() => console.log("go to contact us form")}>
                    <span >Let's Connect</span>
                </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;