import { useState } from "react";

function About() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="h-screen font-mono pt-10 flex flex-col">
            
            <div className="h-1/3 flex flex-col items-center justify-center gap-6">
                <h1 className="font-extrabold text-3xl text-center">
                    About Me
                </h1>

                <h1 className="text-2xl text-center">
                    Experience, technologies and background.
                </h1>

                <table className="w-1/3 border-collapse rounded-xl overflow-hidden border">
                    <tbody>
                        <tr>
                            <td className="border p-4 text-center hover:bg-orange-300">
                                <button onClick={() => setActiveTab("about")}>
                                    ABOUT
                                </button>
                            </td>

                            <td className="border p-4 text-center hover:bg-orange-300">
                                <button onClick={() => setActiveTab("skills")}>
                                    SKILLS
                                </button>
                            </td>

                            <td className="border p-4 text-center hover:bg-orange-300">
                                <button onClick={() => setActiveTab("education")}>
                                    EDUCATION
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex-1 flex flex-col items-center pt-20">
                
                {activeTab === "about" && (
                    <div className="w-2/3 text-center space-y-10">
                        
                        <h1 className="text-xl">
                            <span className="text-2xl font-extrabold">
                                Tony Lee
                            </span>{" "}
                            - Full Stack Developer
                        </h1>

                        <h1 className="text-xl leading-relaxed">
                            Experienced Web Developer adept in all stages of
                            advanced web development. Bringing expertise in
                            design, installation, testing, and maintenance of
                            web systems. Knowledgeable in varied programming
                            using Front-End and Back-End development.
                            Proficient in an assortment of technologies,
                            including ML/DL, APIs, React, and more. Able to
                            effectively self-manage during independent
                            projects, as well as collaborate in team
                            environments.
                        </h1>

                        <h1 className="text-lg">
                            IDE and Tools: VS Code, Anaconda, Docker, Git,
                            Amazon Web Services, Google Cloud Platform
                        </h1>
                    </div>
                )}

                {activeTab === "skills" && (
                    <>
                    <div className="w-2/3 flex flex-row justify-evenly font-black">
                        
                        <div className="space-y-2">
                            <h1>HTML/CSS</h1>
                            <h1>REACT/VUE/ANGULAR</h1>
                            <h1>BOOTSTRAP/SASS/SCSS</h1>
                            <h1>JAVASCRIPT/TYPESCRIPT</h1>
                            <h1>PHP</h1>
                            <h1>NODE.JS/EXPRESS.JS</h1>
                            <h1>RESTFUL APIS</h1>
                            <h1>SQL/MYSQL/POSTGRESQL</h1>
                            <h1>MONGODB</h1>
                            <h1>WINDOW/MAC</h1>
                        </div>

                        <div className="space-y-2">
                            <h1>PYTHON/DJANGO</h1>
                            <h1>AI/ML</h1>
                            <h1>TENSORFLOW/KERAS/PYTORCH</h1>
                            <h1>WEB.JS</h1>
                            <h1>GIT/GITHUB/GITLAB</h1>
                            <h1>DOCKER</h1>
                            <h1>AWS</h1>
                        </div>

                    </div>

                    </>
                )}

                {activeTab === "education" && (
                    <div className="text-center">
                        <h1>Bachelor of Science (Honours), Computer Science</h1>
                        <h1>Toronto Metropolitan University</h1>
                        <h1>2024-2027</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;