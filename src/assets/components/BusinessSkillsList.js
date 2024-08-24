import Card from 'react-bootstrap/Card';
import '../styling/skills.css'
import { CardGroup } from 'react-bootstrap';

export const BusinessSkillsCards = ({ mode, businessInfo }) => {
    return (
        <section>
            <br />
            <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Analysis Skills</h2>
            <br />
            <CardGroup>
                {businessInfo.map((info) => (
                    <Card
                        id="skill"
                        className={`mx-5 border-4 skill-card skill-card-${info.border}`}
                        key={info.title}>
                        <Card.Img variant='top' src={info.image} alt={`${info.title} Image`} style={{ height: '18rem', borderRadius: '50px' }} />
                        <Card.Body>
                            <Card.Title>{info.title}</Card.Title>
                            <Card.Text className='card-text'>{info.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </section>
    )
}