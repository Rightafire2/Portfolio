import { BusinessSkillsCards } from '../components/BusinessSkillsList';
import { CodingSkillsCards } from '../components/CodingSkillsList';
import { businessCards } from '../configurations/BusinessCards';
import { codingCards } from '../configurations/CodingCards';
import { AboutImg } from '../configurations/ChangeAboutImg';
import '../styling/aboutme.css';
import { Row, Col } from 'react-bootstrap';

export const AboutMe = ({ mode }) => {
    return (
        <>
        <div className="m-auto about-me-container">
            <Row className="align-items-center">

                {/* mb-4 and mb-md-0 classes were sugggested by Chat-GPT for responsive design */}
                <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
                    <AboutImg />
                </Col>
                <Col xs={12} md={6}>
                    <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>ABOUT ME</h1>
                    <br />
                    <p className={`text-${mode === 'light' ? 'dark' : 'white'} abt-text`}>
                        My name is Amogh Bharadwaj and I am a student at Northwestern University studying Computer Science (BS).
                        I am also an invest tech analyst at Wellington Management. I'm passionate about both finance and technology 
                        and love studying the intersection between these two fields.
                    </p>
                </Col>
            </Row>
        </div>
        <CodingSkillsCards mode={mode} codingInfo={codingCards} />
        <hr />
        <BusinessSkillsCards mode={mode} businessInfo={businessCards} />
        </>
    );
};
