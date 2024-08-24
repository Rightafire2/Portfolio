import Card from 'react-bootstrap/Card';
import '../styling/skills.css';
import { CardGroup } from 'react-bootstrap';
import React from 'react';

export const CodingSkillsCards = ({ mode, codingInfo }) => {
    return (
        <section>
            <br />
            <br />
            <br />
            <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Coding Skills</h2>
            <br />
            <CardGroup>
                {codingInfo.map((info) => (
                    <Card
                        id="skill"
                        className={`mx-5 border-4 skill-card skill-card-${info.border}`}
                        key={info.title}>
                        <Card.Img variant='top' src={info.image} alt={`${info.title} Image`} style={{ height: '18rem', borderRadius: '50px' }} />
                        <Card.Body>
                            <Card.Title className='card-title' >{info.title}</Card.Title>
                            <Card.Text className='card-text'>{info.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
            <br />
            <br />
        </section>
    )
}