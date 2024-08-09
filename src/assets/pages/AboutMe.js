import { CodingSkillsCards } from '../components/CodingSkillsList';
import { AboutImg } from '../configurations/ChangeAboutImg';
import '../styling/aboutme.css'
import { Row, Col } from 'react-bootstrap'

export const AboutMe = () => {

    return (
        <div className="m-5">
            <h1>ABOUT ME</h1>
            <br />
            <Row>
                <Col>
                    <p>My name is Amogh Bharadwaj and I am a student at Northwestern University studying Computer Science (BS). I am also an invest tech analyst at Wellington Management. I'm passionate about both finance and technology and love studying the intersection between these two fields.</p>
                </Col>
                <Col className='text-center'>
                    <AboutImg />
                </Col>
            </Row>
            <CodingSkillsCards />
        </div>
    );
}