import porfileimg from "../../assets/profile.png"
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from "react";
import img1 from "../../assets/pexels-catiamatos-1072179.jpg";
import img2 from "../../assets/pexels-rovenimages-com-344613-949587.jpg";
import img3 from "../../assets/pexels-umkreisel-app-956999.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Resume</NavLink></li>
        <li><NavLink to="/works">Works</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>

    const backgroundImages = [img1];

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [fade, setFade] = useState(true);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // Start fading out
    //         setFade(false);

    //         // After fade out completes, change image and fade back in
    //         setTimeout(() => {
    //             setBackgroundIndex((prev) => (prev + 1) % backgroundImages.length);
    //             setFade(true);
    //         }, 700); // This should match your CSS transition duration
    //     }, 4000); // change every 4 seconds

    //     return () => clearInterval(interval);
    // }, [backgroundImages.length]);

    return (
        <div className="md:flex">
            {/* Navbar */}
            <div className="navbar bg-base-100 shadow-sm md:fixed left-0 md:w-[6vw] md:h-[80vh]">                {/* <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div> */}
                <div className="sm:flex">
                    <ul className="menu sm:menu-vertical menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>

            {/* Profile */}
            <div className="bg-white shadow-md md:fixed md:left-[6vw] md:w-[29vw] md:h-[90vh] pt-5">                {/* Background Image Container - Now at the top */}
                <div className="background-container">
                    <div className="md:w-[29vw] h-72 relative">
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
                <div className="text-yellow-600">
                    {/* <Typewriter
                    words={['Programmer', 'Web Developer', 'Researcher']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                /> */}
                </div>

                {/* <!-- Social Icons --> */}
                <div class="md:flex justify-center gap-4 mt-4 text-xl text-gray-600">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-x-twitter"></i>
                    <i class="fab fa-github"></i>
                    <i class="fab fa-stack-overflow"></i>
                    <i class="fab fa-whatsapp"></i>
                </div>

                {/* <!-- Buttons --> */}
                <div class="md:flex mt-6 text-sm font-semibold">
                    <button class="w-1/2 py-2 border-r border-gray-200">DOWNLOAD CV</button>
                    <button class="w-1/2 py-2">CONTACT ME</button>
                </div>
            </div>

            {/* Main Content */}
        </div>
    );
};

export default Navbar;