import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo.svg"
import firstNavIcon from '../assets/images/nav-icon1.svg'
import secondNavIcon from '../assets/images/nav-icon2.svg'
import thirdNavIcon from '../assets/images/nav-icon3.svg'

export const Footer = () => {
    return (
        <footer className="Footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/omarraymond"><img src={firstNavIcon} alt="Omar LinkedIn" /> </a>
                            <a href="https://github.com/InquisitiveMindHasToKnow"><img src={secondNavIcon} alt="Omar Github"/></a>
                            <a href="#"><img src={thirdNavIcon} alt="Icon"/></a>
                        </div>
                        <p>CopyRight 2024, All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
