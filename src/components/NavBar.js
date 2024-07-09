import { Navbar, Nav, Container } from "react-bootstrap"
import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import firstNavIcon from '../assets/images/nav-icon1.svg'
import secondNavIcon from '../assets/images/nav-icon2.svg'
import thirdNavIcon from '../assets/images/nav-icon3.svg'

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {
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

    //function to update active link
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className='social-icon'> 
                     <a href="https://www.linkedin.com/in/omarraymond"><img src={firstNavIcon} alt="Omar LinkedIn" /> </a>
                     <a href="https://github.com/InquisitiveMindHasToKnow"><img src={secondNavIcon} alt="Omar Github"/></a>
                     <a href="#"><img src={thirdNavIcon} alt="" /> </a>
                 </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
