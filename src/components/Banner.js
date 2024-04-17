import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImage from "../assets/images/headerImage.svg"

export const Banner = () => {
    
    // sets the index of what display attribute will be displayed. Default 0
    const [loopIndex, setLoopIndex] = useState(0)

    // gives component context as to whether word is being typed or not
    const [isDeleting, setIsDeleting] = useState(false)

    //gives component context of what is being typed at the time
    const [text, setText] = useState('')

    // gives compoent context as to how much time has passed since last letter typed
    const timePassed = 2000

    // attributes to be looped
    const displayableAttributes = [ "Software Engineer with a focus on FrontEnd", "Mobile Engineer with a focus on Android" ]

    // sets amount of time it takes for a letter to follow the previous one in the word. 
    const [delta, setDelta] = useEffect(300 - Math.random() * 100)
    
    // this use effect is ran everytime text is updated. 
    useEffect(() => {
        let textUpdateTimer = setInterval(() => {
            tick()
        }, delta)
    return () => { clearInterval(textUpdateTimer)}
    }, [text])

    const tick = () => {
        let index = loopIndex % toRotate.length
        let fullText = toRotate[index]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
        }
    }       

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">Welcome to my Programming Portfolio</span>
                     <h1>{`Hey! I'm Omar`} <span className="wrap" >Software Engineer</span></h1>
                     <p>I wanna be the very best that no one ever waaaas… ♫♪ ta na ta da ♫♪ …to write code is my real test, to test them is my caauuse! I’ll travel across the web, searching far and wiiiiide….to make effective methods, test and feeeaaatures to bring good apps to liiiifeee!!!</p>
                     <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={7} xl={5}>
                      <img src={''} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}