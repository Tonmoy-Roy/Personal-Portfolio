import porfileimg from "../../assets/profile.png"
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from "react";
import img1 from "../../assets/pexels-catiamatos-1072179.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";


const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        document.documentElement.setAttribute("data-theme", storedTheme || "dark");
        setIsDark(storedTheme === "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setIsDark(!isDark);
    };
    const links = <>
        <input onClick={toggleTheme} type="checkbox" checked={isDark} className="toggle btn mr-5 mb-3" readOnly />
        <li className="btn btn-outline mr-5 mb-3 md:w-[7vw]"><NavLink>About <IoIosContact className="text-xl" /></NavLink></li>
        <li className="btn btn-outline mb-3 mr-5 md:w-[7vw]"><NavLink to="/works">Works <GrProjects className="xl" /> </NavLink></li>
        <li className="btn btn-outline md:w-[7vw]"><NavLink to="/contact">Contact <FaPhoneAlt className="xl" /></NavLink></li>
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
                {/* Background Image Container - Now at the top */}
                <div className="background-container">
                    <div className="md:w-[303px] h-72 relative">
                        <div
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 rounded ${fade ? 'opacity-600' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}
                        />
                    </div>
                </div>

                {/* Profile Image - Positioned below the background */}
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
                    <Link to="mailto:roytonmoy901@gmail.com"><AiTwotoneMail className='mr-5 text-xl' /></Link>
                    <Link to="https://github.com/Tonmoy-Roy"><FaGithub className='mr-5 text-xl' /></Link>
                    <Link to="https://www.linkedin.com/in/tonmoy-roy-own/"><BsLinkedin className='mr-5 text-xl' /></Link>
                    <Link to="https://wa.me/+8801894176266"><MdOutlineLocalPhone className="text-xl" /></Link>
                </div>

                {/* <!-- Buttons --> */}
                <div class="mt-6 text-sm font-semibold">
                    <a href="/public/Resume.pdf" download>
                        <button class="btn btn-outline mr-2">DOWNLOAD RESUME</button>
                    </a>
                    <Link to="mailto:roytonmoy901@gmail.com"><button class="btn btn-outline">CONTACT ME</button></Link>
                </div>
            </div>

            {/* Main Content */}
        </div>
    );
};

export default Navbar;