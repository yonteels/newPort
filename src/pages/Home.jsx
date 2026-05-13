import { FcAbout } from 'react-icons/fc'
import Navbar from '../components/Navbar.jsx'
import Main from './Main.jsx'
import About from './About.jsx'

function Home() {
    return (
        <>
        <div className="fixed top-0 left-0 w-full z-50 bg-white">
            <Navbar /> 
        </div>
        <div id = "home">
            <Main/>
        </div>
        <div id = "about">
            <About/>
        </div>

        </>
    )
}

export default Home