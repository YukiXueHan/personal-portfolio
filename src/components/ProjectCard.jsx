import { Col } from "react-bootstrap";
import '../styles/Projects.css'

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={url}>
            <span>{description}</span>
          </a>
        </div>

      </div>
    </Col>
  )
}

export default ProjectCard;