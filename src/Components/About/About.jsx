import { NavLink } from "react-router-dom";
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
                        <p className="text-gray-600">I am passionate about creating beautiful and functional websites that
                            people can use and enjoy. I am always looking for new challenges and I am always learning new things.
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl"><span className="text-yellow-600">M</span>y Services</p>
                        <p className="divider md:w-[30vw]"></p>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={html5} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">HTML5</p>
                            <p>HTML5 is used to create modern, structured, and multimedia-rich web pages with improved semantics, cross-browser support, and offline capabilities.
                            </p>
                        </div>

                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Css} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">CSS</p>
                            <p>CSS is used to style and layout web pages, making them visually appealing and responsive.(Short version: "CSS styles and designs web pages.")
                            </p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Tailwind} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">Tailwind</p>
                            <p>Tailwind CSS is used to rapidly build modern, responsive websites with utility-first classes for faster development.

                            </p>
                        </div>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Javascript} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">JavaScript</p>
                            <p>JavaScript is used to add interactivity, dynamic behavior, and functionality to websites.(Short version: "JavaScript makes websites interactive and dynamic.")
                            </p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={React} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">React Js</p>
                            <p>React.js is used to build fast, scalable, and interactive user interfaces with reusable components.(Short version: "React creates dynamic UIs with reusable components.")
                            </p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Dom} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">React Router Dom</p>
                            <p>React Router DOM is used to enable client-side routing and navigation in React applications without page reloads.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Nodejs} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">Node Js</p>
                            <p>A runtime for executing JavaScript on the server, enabling scalable backend development</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={FireBase} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">Firebase</p>
                            <p>A Google-backed platform offering real-time databases, auth, and cloud services for fast app development.</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5 transition duration-500 ease-in-out 
                                 transform hover:-translate-y-2 hover:scale-300 
                                 hover:shadow-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 border-t-4 border-cyan-500">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Mongodb} alt="" />
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

        </div>
    );
};

export default About;