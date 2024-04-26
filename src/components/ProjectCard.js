
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl}) => {
    return (
        <Col sm={6} md={4}>
          <div className="project-image-box">
                <img src={imageUrl} />
                <div className="project-text">
                    <h4> {title} </h4>
                    <span> {description} </span>
                </div>
          </div>
        </Col>
    )
}