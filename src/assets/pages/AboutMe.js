import { SkillsCards } from '../components/SkillsList';
import '../images/me.jpg'

export const AboutMe = () => {
    return (
        <div>
            <h1>ABOUT ME</h1>
            <br />
            <p>My name is Amogh Bharadwaj and I am a student at Northwestern University studying Computer Science (BS). I am also an invest tech analyst at Wellington Management. Here are a few of my skills: </p>
            <SkillsCards />
        </div>
    );
}