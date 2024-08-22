import Card from 'react-bootstrap/Card';
import '../styling/skills.css';
import { CardGroup } from 'react-bootstrap';
import React from 'react';

export const CodingSkillsCards = ({ mode, codingInfo }) => {
    return (
        <>
        {Array(3).fill(0).map((_, i) => <br key={i} />)} {/* Referenced from ChatGPT to make adding more breaks between lines easier */}
        <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Coding Skills</h2>
        <br />
        <CardGroup>
            {codingInfo.map((info) => (
                <Card 
                    id="skill" 
                    className={`mx-5 border-4 skill-card skill-card-${info.border}`} 
                    key={info.title}>
                    <Card.Img variant='top' src={info.image} style={{ height: '18rem', borderRadius:'50px' }} />
                    <Card.Body>
                        <Card.Title className='card-title' >{info.title}</Card.Title>
                        <Card.Text className='card-text' dangerouslySetInnerHTML={{ __html: info.description }} /> {/* Referenced from ChatGPT to allow clickable link from array string */}
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
        <br />
        <br />
        </>
    )
}