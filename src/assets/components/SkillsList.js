import Card from 'react-bootstrap/Card';
import reactImg from '../images/react-logo.png'
import pythonImg from '../images/python-logo.jpg'
import '../styling/skills.css'

export const SkillsCards = () => {
    return (
        <div className="d-flex align-items-center  
                        justify-content-center vh-100">
            <Card className="mx-auto" style = {{ width: '18rem', padding: '' }} border='success'>
                <Card.Img variant='top' src={reactImg} />
                <Card.Body>
                    <Card.Title>ReactJS</Card.Title>
                    <Card.Text>I have experience with web page development using ReactJS, HTML, and CSS. I have made multiple web pages using these tools including this site, and <a href='https://ulcerativecolitis.fly.dev'>my UC information page</a>.</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mx-auto" style = {{ width: '18rem' }} border='success'>
                <Card.Img variant='top' src={pythonImg} />
                <Card.Body>
                    <Card.Title>Python</Card.Title>
                    <Card.Text>I have extensive experience coding in Python and have created numerous projects including weighted simulation trials, distributed cache, and Redis.</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mx-auto" style = {{ width: '18rem' }} border='success'>
                <Card.Img variant='top' src={reactImg} />
                <Card.Body>
                    <Card.Title>ReactJS</Card.Title>
                    <Card.Text>I have experience with web page development using ReactJS, HTML, and CSS. I have made multiple web pages using these tools including this site, and <a href='https://ulcerativecolitis.fly.dev'>my UC information page</a>.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}