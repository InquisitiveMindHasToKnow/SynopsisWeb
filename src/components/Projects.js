import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from '../assets/images/color-sharp2.png'
import javaIcon from '../assets/images/java_icon.png'
import kotlinIcon from '../assets/images/kotlin_icon.png'
import pythonIcon from '../assets/images/python_icon.png'
import reactIcon from '../assets/images/react_icon.png'
import synopsis_java_icon from '../assets/images/synopsis_java.png'
import essential_facts_icon from '../assets/images/essential_facts.png'
import savebart_icon from '../assets/images/save_bart.png'
import mastermind_icon from '../assets/images/mastermind.png'
import synopsis_kotlin_icon from '../assets/images/synopsis_kt.png'
import android_trivia_icon from '../assets/images/android_trivia.png'
import milabila_icon from '../assets/images/milabila.png'
import synopsis_web_icon from '../assets/images/synopsis_web.png'
import gpt3_icon from '../assets/images/gpt3_icon.png'





import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: "Synopsis: Java",
      description: "An interactive way to glean a synopsis of my professional resume as an Android Developer using the Java language!",
      imgUrl: synopsis_java_icon,
      category: "Java",
      link: "https://github.com/InquisitiveMindHasToKnow/Synopsis"
    },
    {
      title: "Synopsis: Kotlin",
      description: "An interactive way to glean a synopsis of my professional resume as an Android Developer using the Kotlin language.",
      imgUrl: synopsis_kotlin_icon,
      category: "Python",
      link: "https://github.com/InquisitiveMindHasToKnow/Synopsis_Kotlin"
    },
    {
      title: "Mastermind Java",
      description: "Android App showcasing a Mastermind app using java language.",
      imgUrl: mastermind_icon,
      category: "Java",
      link: "https://github.com/InquisitiveMindHasToKnow/Mastermind"
    },
    {
      title: "Save Bart",
      description: "By far the most fun you'll have guessing a 4-digit combination!",
      imgUrl: savebart_icon,
      category: "Kotlin",
      link: "https://github.com/InquisitiveMindHasToKnow/SaveBart"
    },
    {
      title: "Essential Facts",
      description: "Essential Facts aims to educate users on American History and current political facts and test their knowledge with a mini trivia from time to time.",
      imgUrl: essential_facts_icon,
      category: "Kotlin",
      link: "https://github.com/InquisitiveMindHasToKnow/EssentialFacts"
    },
    {
      title: "MiLaBiLa",
      description: "The one stop app to give your toddlers an early start to learning their numbers, days of the week, months of the year and much more!",
      imgUrl: milabila_icon,
      category: "Kotlin",
      link: "https://github.com/InquisitiveMindHasToKnow/MiLaBiLa"
    },
    {
      title: "Android Trivia",
      description: "An interactive way to test your knowledge of the Android basics ",
      imgUrl: android_trivia_icon,
      category: "Kotlin",
      link: "https://github.com/InquisitiveMindHasToKnow/AndroidTrivia"
    },
    {
      title: "Synopsis:Web",
      description: " ",
      imgUrl: synopsis_web_icon,
      category: "Web",
      link: ""   
    },
    {
      title: "GPT-3",
      description: "Reactive web app",
      imgUrl: gpt3_icon,
      category: "Web",
      link: "https://github.com/InquisitiveMindHasToKnow/GPT-3"   
    }
  ];

  const renderProjects = (category) => {
    return projects
      .filter(project => project.category === category)
      .map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ));
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <div>
                  <h2>Projects</h2>
                  <p>Experienced programmer with over 5 years of expertise in developing innovative and scalable applications for both mobile and web platforms. Proficient in a wide range of programming languages, frameworks, and technologies, with a proven track record of delivering high-quality solutions to meet diverse business needs. Possesses a deep understanding of software development lifecycle, from concept to deployment, and adept at collaborating with cross-functional teams to drive project success. Skilled in problem-solving, code optimization, and staying updated with emerging trends in technology. Committed to delivering user-centric experiences and passionate about leveraging technology to drive positive impact.</p>
                  <Tab.Container id="project-tabs" defaultActiveKey="firstTab">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="firstTab">
                          <img src={pythonIcon} alt="Python Projects" style={{ width: '20px', marginRight: '8px' }}/> 
                            Python Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="secondTab">
                          <img src={kotlinIcon} alt="Kotlin Projects" style={{ width: '20px', marginRight: '8px' }}/> 
                            Kotlin Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="thirdTab"> 
                            <img src={javaIcon} alt="Java Projects" style={{ width: '20px', marginRight: '8px' }}/> 
                            Java Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourthTab">
                            <img src={reactIcon} alt="Web Projects" style={{ width: '20px', marginRight: '8px' }}/>
                            Web Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="firstTab">
                        <Row>
                        {renderProjects("Python")}
                          
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="secondTab">
                        <Row>
                          {renderProjects("Kotlin")}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="thirdTab">
                        <Row>
                          {renderProjects("Java")}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourthTab">
                        <Row>
                          {renderProjects("Web")}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background-img"></img>
    </section>
  )
}