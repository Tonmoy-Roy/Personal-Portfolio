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
import HoverCard from "./HoverCard"

const About = () => {
    return (
        <div className="md:ml-[20vw] md:h-[90vh] overflow-hidden md:w-[60vw] pt-10 ">
            <div className="h-full overflow-y-auto">
                <div className="md:mt-0 p-6 text-left">
                    <p className="text-xl font-semibold text-gray-200"><span className="text-yellow-600">A</span>bout Me</p>
                    <p className="divider md:w-[30vw] bg-gray-600 h-[1px]"></p>
                    <div className="mb-5">
                        <p className="text-lg mb-2 font-semibold text-gray-200">Hello! I'm Tonmoy Roy.</p>
                        <p className="text-gray-300">I am passionate about creating beautiful and functional websites that
                            people can use and enjoy. I am always looking for new challenges and constantly learning new things.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-200"><span className="text-yellow-600">M</span>y Services</p>
                        <p className="divider md:w-[30vw] bg-gray-600 h-[1px]"></p>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <HoverCard
                            img={html5}
                            title="HTML5"
                            desc="HTML5 is used to create modern, structured, and multimedia-rich web pages
  with improved semantics, cross-browser support, and offline capabilities."
                        />

                        <HoverCard
                            img={Css}
                            title="CSS"
                            desc='CSS is used to style and layout web pages, making them visually appealing and responsive. (Short version: "CSS styles and designs web pages.")'
                        />

                        <HoverCard
                            img={Tailwind}
                            title="Tailwind CSS"
                            desc="Tailwind CSS is used to rapidly build modern, responsive websites with utility-first classes for faster development."
                        />
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <HoverCard
                            img={Javascript}
                            title="JavaScript"
                            desc='JavaScript is used to add interactivity, dynamic behavior, and functionality to websites.(Short version: "JavaScript makes websites interactive and dynamic.")'
                        />

                        <HoverCard
                            img={React}
                            title="React.js"
                            desc='React.js is used to build fast, scalable, and interactive user interfaces with reusable components.(Short version: "React creates dynamic UIs with reusable components.")'
                        />

                        <HoverCard
                            img={Dom}
                            title="React Router DOM"
                            desc="React Router DOM is used to enable client-side routing and navigation in React applications without page reloads."
                        />
                    </div>

                    <div className="md:flex justify-around p-5 mx-auto">
                        <HoverCard
                            img={Nodejs}
                            title="Node.js"
                            desc="A runtime for executing JavaScript on the server, enabling scalable backend development."
                        />

                        <HoverCard
                            img={FireBase}
                            title="Firebase"
                            desc="A Google-backed platform offering real-time databases, authentication, and cloud services for fast app development."
                        />

                        <HoverCard
                            img={Mongodb}
                            title="MongoDB"
                            desc="A NoSQL database storing flexible, JSON-like documents for high-performance data handling."
                        />
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-200"><span className="text-yellow-600">M</span>y Online Judge</p>
                        <p className="divider md:w-[30vw] bg-gray-600 h-[1px]"></p>
                        <div className="md:flex justify-start md:ml-[3vw]">
                            <a href="https://codeforces.com/profile/Tonmoy_Roy"><Lottie className="mr-10 md:h-[10vh] h-20 md:w-[5vw] mb-3" animationData={codeforces}></Lottie></a>
                            <a href="https://atcoder.jp/users/Tonmoy_Roy" className="flex justify-center items-center"><img src={atcoder} alt="codechef" className="mr-10 md:h-[10vh] h-20 md:w-[5vw] mb-3 bg-white rounded p-1" /></a>
                            <a href="https://drive.google.com/file/d/1oe8MekuU-MAZbClL1bevvfZg3f6WLRDz/view?usp=sharing" className="flex justify-center items-center md:mt-[-1.7vh] mt-0"><img src={icpc} alt="" className="md:h-[10vh] md:w-[5vw] rounded h-20 mr-10 md:mr-0 w-24 " /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default About;