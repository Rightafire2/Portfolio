import Card from 'react-bootstrap/Card';
import reactImg from '../images/react-logo.png'
import pythonImg from '../images/python-logo.jpg'
import '../styling/skills.css'

export const CodingSkillsCards = () => {
    return (
        <div className="d-flex align-items-center  
                        justify-content-center vh-100">
            <Card className="mx-auto border-4 border-success" style = {{ width: '18rem' }}>
                <Card.Img variant='top' src={reactImg} />
                <Card.Body>
                    <Card.Title>Business Analysis</Card.Title>
                    <Card.Text>I have experience in business and instrument analysis including knowledge of how different instruments work, and where issues may lie when investing.</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mx-auto border-4 border-primary" style = {{ width: '18rem' }}>
                <Card.Img variant='top' src={pythonImg} />
                <Card.Body>
                    <Card.Title>Python</Card.Title>
                    <Card.Text>I have extensive experience coding in Python and have created numerous projects including weighted simulation trials, distributed cache, and Redis.</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mx-auto border-4 border-danger" style = {{ width: '18rem' }}>
                <Card.Img variant='top' src={reactImg} />
                <Card.Body>
                    <Card.Title>ReactJS</Card.Title>
                    <Card.Text>I have experience with web page development using ReactJS, HTML, and CSS. I have made multiple web pages using these tools including this site, and <a href='https://ulcerativecolitis.fly.dev'>my UC information page</a>.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}