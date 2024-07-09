import { Container, Row, Col, Tab, Nav, TabContainer } from "react-bootstrap";
import projImg1 from "../assets/images/project-img2.png"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from '../assets/images/color-sharp2.png'
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    const projects = [
        {
          title: "Synopsis Java",
          description: "An interactive way to glean a synopsis of my professional resume as an Android Developer using the Java language!",
          imgUrl: projImg1,
        },
        {
          title: "Synopsis Kotlin",
          description: "An interactive way to glean a synopsis of my professional resume as an Android Developer using the Kotlin language.",
          imgUrl: projImg1,
        },
        {
          title: "Mastermind Java",
          description: "Android App showcasing a Mastermind app using java language.",
          imgUrl: projImg1,
        },
        {
          title: "Save Bart",
          description: "By far the most fun you'll have guessing a 4-digit combination!",
          imgUrl: projImg1,
        },
        {
          title: "Essential Facts",
          description: "Essential Facts aims to educate users on American History and current political facts and test their knowledge with a mini trivia from time to time.",
          imgUrl: projImg1,
        },
        {
          title: "MiLaBiLa",
          description: "The one stop app to give your toddlers an early start to learning their numbers, days of the week, months of the year and much more!",
          imgUrl: projImg1,
        },
      ];

      return (
        <section className="project" id="project">
            <Container>
                <Row>
                <Col size={12}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2>Projects</h2>
                        <p>Experienced programmer with over 5 years of expertise in developing innovative and scalable applications for both mobile and web platforms. Proficient in a wide range of programming languages, frameworks, and technologies, with a proven track record of delivering high-quality solutions to meet diverse business needs. Possesses a deep understanding of software development lifecycle, from concept to deployment, and adept at collaborating with cross-functional teams to drive project success. Skilled in problem-solving, code optimization, and staying updated with emerging trends in technology. Committed to delivering user-centric experiences and passionate about leveraging technology to drive positive impact. </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="firstTab">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                           <Nav.Item>
                               <Nav.Link eventKey="firstTab">Tab 1</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                               <Nav.Link eventKey="secondTab">Tab 2</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                               <Nav.Link eventKey="thirdTab">Tab 3</Nav.Link>
                           </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="firstTab">
                                 <Row>
                                 {
                                   projects.map((project, index) => {
                                      return (
                                        <ProjectCard
                                             key={index}
                                             {...project}
                                        />     
                                      )
                                     })
                                 }
                                 </Row>
                             </Tab.Pane>
                            <Tab.Pane eventKey="section">
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="thirdTab">
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                        </div>}
                      </TrackVisibility>  
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background-img"></img>
        </section>

      )
}