import resume from '../pdfs/Bharadwaj_Amogh_Resume.pdf'
import '../styling/resume.css'

/* Resume Component: Include title, description, and a button which opens my resume pdf in another page */
export const Resume = ({ mode }) => {
    return (
        <main>
            <br />
            <br />
            <br />
            <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>RESUME</h1>
            <br />
            <h3 className={`text-${mode === 'light' ? 'dark' : 'white'}`} style={{ textAlign: 'center' }}>Click on the button below to open my resume!</h3>
            <br />
            <br />
            <a className='d-flex justify-content-center' style={{ textDecoration: "none" }} href={resume} target='_blank'>
                <button className='resume-button'>Resume</button>
            </a>
        </main>
    )
}
