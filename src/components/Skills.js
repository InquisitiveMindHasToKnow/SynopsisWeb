import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import meter1 from "../assets/images/meter1.svg"
import meter2 from "../assets/images/meter2.svg"
import meter3 from "../assets/images/meter3.svg"
import colorSharp from "../assets/images/color-sharp.png"

export const Skills = () =>  {
    // Displays a certain amount of items in the carousel depending on size of device
    const responsive = {
        superLargeDesktop: {
         breakpoint: { max: 4000, min: 3000 },
         items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                       <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Over the past few years, I have both gained and improved my expertise in many areas.<br></br> These areas include but are not limited to:</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="corousel-item">
                                <img src={meter3} alt="first-carousel-item" />
                                <h5>Web Development</h5>
                                <h6>• JavaScript <br/>• Css <br/>• Html <br/>• React</h6>
                            </div>
                            <div className="corousel-item">
                                <img src={meter1} alt="second-carousel-item" />
                                <h5>Mobile Development</h5>
                                <h6>• Java <br/>• Kotlin <br/>• Jetpack Compose  <br/>• Python</h6>
                            </div>
                            <div className="corousel-item">
                                <img src={meter1} alt="fourth-carousel-item" />
                                <h5>Artificial Intelligence</h5>
                                <h6>• LangGraph</h6><h6>• AutoGen</h6>
                            </div>
                            <div className="corousel-item">
                                <img src={meter2} alt="third-carousel-item" />
                                <h5>Miscellaneous</h5>
                                <h6>• Jira <br/>• Git / Github <br/> • Grafana</h6>
                            </div>
                            </Carousel>
                       </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="img" />
        </section>
      )
}