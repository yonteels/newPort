import Navbar from '../components/Navbar.jsx'
import homebg1 from '../images/HomeBg1.jpg'
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

function Home() {
    return (
        <>
        <div className="h-screen">
            <div className="absolute top-0 left-0 w-full z-10">
                <Navbar />
            </div>
            <div className='h-screen flex items-center justify-center'>
               
                {/* Home Page Left */}
                <div className='text-left bg-amber-50 mr-20' >
                    <button className=''><SlSocialLinkedin /></button>
                    <FaGithub />
                </div>

                <div className='text-center bg-amber-400'>
                    <h1 className='text-4xl'>
                        Hi, I'm Tony
                    </h1>
                    <h1 className='text-3xl'>Full-Stack Software Develoer</h1>
                    <h1 className='text-2xl'>High level expereince in web design and backend develoment</h1>
                </div>
               

            </div>
        </div>
        <div className='h-screen'>

        </div>
        </>
    )
}

export default Home