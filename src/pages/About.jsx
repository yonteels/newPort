import {useState} from "react";

function About(){

    const [activeTab, setActiveTab] = useState("about")
    return (

    <div className="h-screen font-mono">
        <div className="h-1/3 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="font-extrabold text-3xl">About Me</h1>
                <h1 className="text-2xl">Expierence, technologies and background.</h1>
            </div>

            <div className="flex gap-6">
                <button onClick={() => setActiveTab("about")} className="">
                    ABOUT
                </button>

                <button onClick={() => setActiveTab("SKILL")}>
                    SKILL
                </button>

                <button onClick={() => setActiveTab("EDUCATION")}>
                    EDUCATION
                </button>
            </div>
    </div>
    <div className="h-2/3">
        {activeTab === "about" && (
            <>
                    <h1>Tony Lee - Full Stack Developper</h1>
                    <h1>Expereinced Web Developer adept in all stages of advanced web developpment. Brining expertise in design, installation, testing and maintenance of web systems. Knowledgeable in varied programming using Front-End and Back-End development. Proficient in an assortment of technologies, including ML/DL, API, React, and so on. Able to effectively self-manage during independent projects, as well as collaborate in team setting.</h1>
                    <h1>IDE and Tools: VS Code, Anaconda, Docker, Git, Amazon Web Services, Google Cloud Platform</h1>
            </>
        )}
    </div>
    </div>

    )
}

export default About