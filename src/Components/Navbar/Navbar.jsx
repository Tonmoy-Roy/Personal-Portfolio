import porfileimg from "../../../src/assets/profile1.png";
import { Typewriter } from 'react-simple-typewriter';
import { useState } from "react";
import img1 from "../../assets/pexels-catiamatos-1072179.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import './Navbar.scss';

const Navbar = () => {
    const links = <>
        <div className="flex md:block">
            <li className="btn btn-outline button mr-5 mb-3 md:w-[6vw] w-[37vw] py-1 md:h-[6vh]"><NavLink>About <IoIosContact className="text-xl" /></NavLink></li>
            <li className="btn btn-outline mb-3 button mr-5 md:w-[6vw] hover:text-white w-[37vw] py-1"><NavLink to="/works">Works <GrProjects className="xl" /> </NavLink></li>
        </div>
        <li className="btn btn-outline md:w-[6vw] button hover:text-white w-[37vw] ml-[18vw] md:ml-0 py-1"><NavLink to="/contact">Contact <FaPhoneAlt className="xl" /></NavLink></li>
    </>

    const backgroundImages = [img1];
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [fade, setFade] = useState(true);

    return (
        <div className="md:flex">
            {/* Navbar */}
            <div className="navbar bg-base-100 shadow-sm md:fixed left-0 md:w-[6vw] md:h-[80vh] ml-[1vw]">
                <div className="sm:flex">
                    <ul className="menu sm:menu-vertical menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>

            {/* Profile */}
            <div className=" shadow-md md:fixed left-[10vw] md:w-[20vw] md:h-[90vh] rounded border-2">
                <div className="background-container">
                    <div className="md:w-[303px] h-72 relative">
                        <div
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 rounded ${fade ? 'opacity-600' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}
                        />
                    </div>
                </div>

                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white relative -mt-16 z-10">
                    <img src={porfileimg} alt="Profile" className="w-full h-full object-cover" />
                </div>

                {/* <!-- Name & Title --> */}
                <h2 class="text-2xl font-bold mt-4">Tonmoy Roy</h2>
                <div className="text-yellow-600 mb-3">
                    <Typewriter
                        words={['Programmer', 'Web Developer', 'Researcher']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </div>

                {/* <!-- Social Icons --> */}
                <div className='flex justify-center'>
                    <Link to="mailto:roytonmoy901@gmail.com"><AiTwotoneMail className='mr-5 text-xl ' /></Link>
                    <Link to="https://github.com/Tonmoy-Roy"><FaGithub className='mr-5 text-xl' /></Link>
                    <Link to="https://www.linkedin.com/in/tonmoy-roy-own/"><BsLinkedin className='mr-5 text-xl' /></Link>
                    <Link to="https://wa.me/+8801894176266"><MdOutlineLocalPhone className="text-xl" /></Link>
                </div>

                {/* <!-- Buttons --> */}
                <div className="md:flex mt-6 text-sm font-semibold">
                    <div className="h-12 md:w-[12vw] ml-16 md:ml-0">
                        <a href="/Tonmoy_Roy_Resume.pdf" download>
                            <div className="buttons">
                                <button className="btn btn-outline mb-5 text-white blob-btn ml-1">DOWNLOAD RESUME
                                    <span className="blob-btn__inner">
                                        <span className="blob-btn__blobs">
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                        </span>
                                    </span>
                                </button>
                                <div className="md:w-[10vw] md:h-[2vh]">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <defs>
                                            <filter id="goo">
                                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <Link to="mailto:roytonmoy901@gmail.com"><button class="btn btn-outline mb-5 mr-2 w-[43vw] md:w-[8vw] glow-on-hover ">CONTACT ME</button></Link>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Navbar;