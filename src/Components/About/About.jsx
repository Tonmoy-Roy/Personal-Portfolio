import html5 from "../../assets/icons/HTML.png"
import Css from "../../assets/icons/CSS.png"
import Tailwind from "../../assets/icons/Tailwind.png"
import Javascript from "../../assets/icons/JavaScript.png"
import React from "../../assets/icons/React2.png"
import FireBase from "../../assets/icons/Firebase.png"
import Nodejs from "../../assets/icons/Nodejs2.png"
import Mongodb from "../../assets/icons/MongoDB.png"
import Dom from "../../assets/icons/ReactRouterDom.png"
import codeforces from "../../../public/code-forces.json"
import atcoder from "../../assets/icons/logo_bk.svg"
import icpc from "../../assets/icons/icpc.png"
import Lottie from "lottie-react";
import { motion as Motion } from "framer-motion";

const About = () => {
    return (
        <div className="md:ml-[20vw] md:h-[90vh] overflow-hidden md:w-[60vw] pt-10 ">
            {/* Scrollable inner container */}
            <div className="h-full overflow-y-auto">
                <div className="md:mt-0 p-6 text-left">
                    <p className="text-2xl"><span className="text-yellow-600">A</span>bout Me</p>
                    <p className="divider md:w-[30vw]"></p>
                    <div className="mb-5">
                        <p className="text-xl mb-2">Hello, I'm Tonmoy Roy.</p>
                        <p>I am passionate about creating beautiful and functional websites that
                            people can use and enjoy. I am always looking for new challenges and I am always learning new things.
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl"><span className="text-yellow-600">M</span>y Services</p>
                        <p className="divider md:w-[30vw]"></p>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className=" rounded" src={html5} alt="HTML5 logo" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">HTML5</p>
                            <p>
                                HTML5 is used to create modern, structured, and multimedia-rich web pages
                                with improved semantics, cross-browser support, and offline capabilities.
                            </p>
                        </div>



                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className="rounded " src={Css} alt="" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">CSS</p>
                            <p>CSS is used to style and layout web pages, making them visually appealing and responsive.(Short version: "CSS styles and designs web pages.")
                            </p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className="rounded" src={Tailwind} alt="" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">Tailwind</p>
                            <p>Tailwind CSS is used to rapidly build modern, responsive websites with utility-first classes for faster development.

                            </p>
                        </div>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className="rounded" src={Javascript} alt="" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">JavaScript</p>
                            <p>JavaScript is used to add interactivity, dynamic behavior, and functionality to websites.(Short version: "JavaScript makes websites interactive and dynamic.")
                            </p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className="rounded" src={React} alt="" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">React Js</p>
                            <p>React.js is used to build fast, scalable, and interactive user interfaces with reusable components.(Short version: "React creates dynamic UIs with reusable components.")
                            </p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className="rounded" src={Dom} alt="" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">React Router Dom</p>
                            <p>React Router DOM is used to enable client-side routing and navigation in React applications without page reloads.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className="rounded" src={Nodejs} alt="" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">Node Js</p>
                            <p>A runtime for executing JavaScript on the server, enabling scalable backend development</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className="rounded" src={FireBase} alt="" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">Firebase</p>
                            <p>A Google-backed platform offering real-time databases, auth, and cloud services for fast app development.</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5">
                            <Motion.div
                                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5"
                                animate={{
                                    y: ["0%", "-10%", "0%", "10%", "0%"],
                                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                                    rotate: [0, 0, 0, 0, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img className="rounded" src={Mongodb} alt="" />
                            </Motion.div>
                            <p className="text-xl text-orange-600 mt-5 font-bold">Mongo Db</p>
                            <p>A NoSQL database storing flexible, JSON-like documents for high-performance data handling.</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl"><span className="text-yellow-600">M</span>y Online Judge</p>
                        <p className="divider md:w-[30vw]"></p>
                        <div className="md:flex justify-start md:ml-[3vw]">
                            <a href="https://codeforces.com/profile/Tonmoy_Roy"><Lottie className="mr-10 md:h-[10vh] md:w-[5vw] mb-3" animationData={codeforces}></Lottie></a>
                            <a href="https://atcoder.jp/users/Tonmoy_Roy"><img src={atcoder} alt="codechef" className="mr-10 md:h-[10vh] md:w-[5vw] mb-3" /></a>
                            <a href="https://drive.google.com/file/d/1oe8MekuU-MAZbClL1bevvfZg3f6WLRDz/view?usp=sharing"><img src={icpc} alt="" className="md:h-[10vh] md:w-[5vw] rounded" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default About;