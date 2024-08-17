import PortfolioImages from '../components/Carousel.js'
import { carouselData } from '../configurations/CarouselData.js'
import wordle from '../ReadMes/WordleSolver/README.md'
import ftp from '../ReadMes/FTP/README.md'
import udp from '../ReadMes/UDP/README.md'
import crawler from '../ReadMes/WebCrawler/README.md'
import cache from '../ReadMes/DistributedCache/README.md'
import '../styling/portfolio.css'

export default function Portfolio({ mode }) {
    return (
        <>
        <h1 className={`px-5 pt-5 text-${mode === 'light' ? 'dark' : 'white'}`}>PORTFOLIO</h1>
        <PortfolioImages carouselPages={carouselData} />
        {[...Array(2)].map((_, index) => <br key={index} />)} {/* Referenced from ChatGPT to make adding more breaks between lines easier */}
        <hr />
        <h3 id="ucwebsite" className={`text-${mode === 'light' ? 'dark' : 'white'} p-portfolio`}>Ulcerative Colitis Website</h3>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>As someone with Ulcerative Colitis, I thought making a website outlining my journey and tricks that were helpful for me in recovery could be a useful tool for others going through the same troubles as me. This site contains tips and tricks for food management/what to avoid, recipes that are safe for people with UC, an interactive map highlighting restaurants and stores to shop at, tips for maintaining mental health, and information on websites and forums that I found useful. <a href="https://ulcerativecolitis.fly.dev/" target="_blank">Here is the link to the website</a>.</p>
        <br />
        <hr />
        <h3 id="network" className={`text-${mode === 'light' ? 'dark' : 'white'} p-portfolio`}>Network Projects</h3>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>As part of a networking class I took at Northeastern university (part of core requirement for CS degree at McCormick), I implemented six network centered programs using Python. The course material and the project descriptions are available at <a href="https://3700.network" target="_blank">https://3700.network</a>.
        <br />
        <br />
        NOTE: In the interest of maintaining academic integrity, I am unable to share the source code for the programs. I do have it stored in a private REPO and can make it available to anyone interested as long as it isn’t used to submit coursework and doesn’t violate academic standards.
        <br />
        <br />
        <ul>
            <li>Wordle Solver: A Simple Wordle Solver Program. See README.md file <a href={wordle} target='_blank'>here</a></li>
            <li>A simple FTP client: See README.md file <a href={ftp} target='_blank'>here</a></li>
            <li>Simple BGP router</li>
            <li>Secure Transport over UDP: See README.MD file <a href={udp} target='_blank'>here</a></li>
            <li>Multi-threaded web crawler: This implementation crawls website in search of 5 hidden secret flags. My implementation uses multi-threading and a relatively straight forward iterative algorithm. Initial recursive algorithm didn’t scale; single threaded iterative algorithm was too slow and didn’t meet expected performance benchmarks. Conversion to a multi-threaded implementation was relatively straight forward and easily met the performance benchmarks. See README.MD file <a href={crawler}>here</a></li>
            <li>Raft consensus protocol: The requirement was to implement a relatively simple distributed cache / key-value datastore (similar to redis, Memcached, DynamoDB, etc.). The implementation used Raft consensus protocol. This project was of particular interest to me as I could see the practical application of such a cache in a commercial setting. One of our critical applications uses a commercial distributed cache to achieve scalability and meet performance requirements. Read more about Raft consensus protocol and browse reference implementations at Raft’s git hub site (https://raft.github.io/). There are also quite a few useful YouTube videos explaining the protocol, and challenges faced. This project was one of the more complex assignments I had to work on and learned a lot in the process. See README.MD file <a href={cache}>here</a></li>
        </ul>
        </p>
        <br />
        <hr />
        <h3 id="ai" className={`text-${mode === 'light' ? 'dark' : 'white'} p-portfolio`}>AI/ML Projects</h3>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>To be added.</p>
        </>
    )
}