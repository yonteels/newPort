import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { CiDesktopMouse1 } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";

function Main (){
    return (
        <div className="h-screen flex bg-amber-50 font-mono">
    
            {/* Left side*/}
            <div className="w-1/3 flex items-center justify-center">
                <div className="flex flex-col gap-10">
                    <a href = "https://www.linkedin.com/in/tony-lee-0612z/?skipRedirect=true"><SlSocialLinkedin className="text-4xl" /></a>
                    <a href = "https://github.com/yonteels"><FaGithub className="text-4xl" /></a>
                </div>
            </div>

            {/* Middle */}
            <div className="w-1/3 flex flex-col items-center justify-center text-center relative">
                

                <div className="space-y-4">
                    <h1 className="text-3xl">Full-Stack Software Developer</h1>
                    <h1 className='text-5xl'>
                        <Typewriter
                            words={["Tony Lee", "Software Developer", "Devops Enthusiast", "ML and AI Enthusiast"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={60}
                            delaySpeed={1000}
                        />
                    </h1>
                    <h1 className="text-2xl pt-2">
                        Full stack developer with experience designing, developing, and implementing software applciations using a range of technologies and programming languages such as React, Vue, Node, Php, Pyhon and so on.
                    </h1>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 flex flex-col items-center">
                    <a href = '#about'><CiDesktopMouse1 className="text-2xl" /></a>
                    <h1 className="text-sm">Scroll Down</h1>
                </div>

            </div>

            {/* Right side */}
            <div className="w-1/3"></div>

        </div>
    )
}

export default Main