import Card from 'react-bootstrap/Card';
import '../styling/skills.css'
import { CardGroup } from 'react-bootstrap';

export const BusinessSkillsCards = ({ mode, businessInfo }) => {
    return (
        <>
        <br />
        <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Analysis Skills</h2>
        <br />
        <CardGroup>
            {businessInfo.map((info) => (
                <Card
                    id="skill"
                    className={`mx-5 border-4 skill-card skill-card-${info.border}`}>
                    <Card.Img variant='top' src={info.image} style={{ height: '18rem' }} />
                    <Card.Body>
                        <Card.Title>{info.title}</Card.Title>
                        <Card.Text>{info.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
        </>
    )
}