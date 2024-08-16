import PortfolioImages from '../components/Carousel.js'
import { carouselData } from '../configurations/CarouselData.js'
import '../styling/portfolio.css'
import { scale } from 'react-native-size-matters'

export default function Portfolio({ mode }) {
    return (
        <>
        <h1 className={`px-5 pt-5 text-${mode === 'light' ? 'dark' : 'white'}`} style={{ fontSize: scale(50) }}>PORTFOLIO</h1>
        <PortfolioImages carouselPages={carouselData} />
        {[...Array(2)].map((_, index) => <br key={index} />)} {/* Referenced from ChatGPT to make adding more breaks between lines easier */}
        <hr />
        <h2 id="ucwebsite" className={`text-${mode === 'light' ? 'dark' : 'white'} p-portfolio`}>Ulcerative Colitis Website</h2>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>As someone with Ulcerative Colitis, I thought making a website outlining my journey and tricks that were helpful for me in recovery could be a useful tool for others going through the same troubles as me. This site contains tips and tricks for food management/what to avoid, recipes that are safe for people with UC, an interactive map highlighting restaurants and stores to shop at, tips for maintaining mental health, and information on websites and forums that I found useful.</p>
        <br />
        <hr />

        </>
    )
}