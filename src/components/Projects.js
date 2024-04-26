import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Projects = () => {
    const projects = [
        {
          title: "Synopsis Java",
          description: "An interactive way to glean a synopsis of my professional resume as an Android Developer using the Java language.",
          imgUrl: projImg1,
        },
        {
          title: "Synopsis Kotlin",
          description: "An interactive way to glean a synopsis of my professional resume as an Android Developer using the Kotlin language.",
          imgUrl: projImg2,
        },
        {
          title: "Mastermind Java",
          description: "Android App showcasing a Mastermind app using java language.",
          imgUrl: projImg3,
        },
        {
          title: "Save Bart",
          description: "By far the most fun you'll have guessing a 4-digit combination!",
          imgUrl: projImg1,
        },
        {
          title: "Essential Facts",
          description: "Essential Facts aims to educate users on American History and current political facts and test their knowledge with a mini trivia from time to time.",
          imgUrl: projImg2,
        },
        {
          title: "MiLaBiLa",
          description: "The one stop app to give your toddlers an early start to learning their numbers, days of the week, months of the year and much more!",
          imgUrl: projImg3,
        },
      ];

      return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Experienced programmer with over 5 years of expertise in developing innovative and scalable applications for both mobile and web platforms. Proficient in a wide range of programming languages, frameworks, and technologies, with a proven track record of delivering high-quality solutions to meet diverse business needs. Possesses a deep understanding of software development lifecycle, from concept to deployment, and adept at collaborating with cross-functional teams to drive project success. Skilled in problem-solving, code optimization, and staying updated with emerging trends in technology. Committed to delivering user-centric experiences and passionate about leveraging technology to drive positive impact. </p>
                    
                    </Col>
                </Row>
            </Container>
        </section>

      )
}