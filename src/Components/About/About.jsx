import porfileimg from "../../assets/profile.png"
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from "react";
import img1 from "../../assets/pexels-catiamatos-1072179.jpg";
import img2 from "../../assets/pexels-rovenimages-com-344613-949587.jpg";
import img3 from "../../assets/pexels-umkreisel-app-956999.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
    const links = <>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Resume</NavLink></li>
        <li><NavLink>Works</NavLink></li>
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
            <div className="bg-white shadow-md md:fixed md:left-[6vw] md:w-[29vw] md:h-[80vh]">                {/* Background Image Container - Now at the top */}
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
            <div className="md:ml-[26vw] md:mt-0 md:w-[65vw] p-6">
                <p className="text-left">About Me</p>
                <p className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam, recusandae modi voluptatibus laudantium dolores porro dolorum doloremque aut necessitatibus neque quas, illum ducimus fuga labore accusantium. Maxime et dolore sequi deleniti quo perferendis laboriosam, fuga, sint ipsum pariatur nobis vel unde doloremque? Nemo vitae facere ipsa consequuntur corporis aliquam.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sint alias numquam molestiae voluptates laudantium magnam modi tenetur ex consectetur, totam ab ipsa velit veniam dolorum pariatur dignissimos assumenda distinctio nesciunt adipisci cupiditate maiores facere deserunt animi. At molestiae eum vero voluptatibus? At, dolor quibusdam aperiam ipsum, atque architecto molestiae distinctio doloribus exercitationem repellat cumque, veritatis temporibus. Dolorem ex impedit molestiae perspiciatis vel soluta, qui distinctio in! Natus accusantium, id officiis odit iure maiores consequatur fugiat harum dolores laborum consectetur explicabo ipsa sequi pariatur vitae eaque quo maxime repudiandae rem ab. Delectus rem minus ab adipisci, blanditiis sed illum quidem culpa qui sunt perspiciatis temporibus nihil autem neque est. Ducimus totam iusto sit exercitationem laboriosam at nihil, assumenda eaque praesentium sint officiis corrupti eveniet libero dicta alias itaque necessitatibus laudantium porro voluptatem saepe blanditiis similique? Voluptatibus accusamus sed maiores perferendis totam nulla soluta maxime repellendus? Sunt ipsa quas architecto ratione, enim fugiat repellendus nobis fuga accusamus tenetur tempora molestiae blanditiis voluptatem dignissimos consequatur vel, aliquam possimus animi cum? Nisi ipsa error expedita soluta, eum quasi, doloribus optio aspernatur quidem, tenetur eaque vel ea ab eligendi blanditiis cumque similique obcaecati culpa. Inventore impedit quos vitae magni unde obcaecati id dolor maxime.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus iure recusandae, adipisci quae asperiores aliquid quod magni fugit ut dignissimos odit velit, quasi possimus! Quae, culpa. Alias blanditiis consequatur, sed ipsam ducimus sint qui voluptatum enim ea. Ducimus adipisci doloribus iure esse, impedit soluta suscipit beatae? Expedita deleniti sit, laborum aliquam nam quas id doloribus aspernatur in soluta obcaecati et blanditiis voluptatibus tempora laudantium, molestias architecto totam, mollitia sapiente molestiae reprehenderit ad unde dolore! Assumenda veritatis nihil dolore molestias velit, optio eius adipisci cum mollitia, sint laborum ut et beatae incidunt nobis amet? Esse ex consectetur animi, quo adipisci libero unde provident sapiente placeat facilis! Quae veritatis ipsam quam voluptate voluptatum quaerat corrupti mollitia dignissimos repellat atque totam perferendis, debitis asperiores molestias magnam architecto, eaque accusantium esse, neque culpa at? Doloribus, harum tempora corporis adipisci voluptatem labore. Cum temporibus consectetur rem! Repellat, nemo quisquam suscipit quod perferendis, deserunt facere minus voluptate tenetur ad commodi, reiciendis velit? Atque officiis eveniet provident repudiandae nemo amet repellat obcaecati doloremque dolore natus reiciendis delectus odio animi placeat, necessitatibus iste fugiat modi sunt ad facere quaerat! Adipisci quis facere qui enim voluptas ad laborum delectus nesciunt, sit pariatur ullam ipsam? Labore ab accusamus consequuntur saepe suscipit consectetur architecto pariatur dolorum debitis reiciendis consequatur rerum sequi ut, quidem, esse, temporibus blanditiis voluptate nisi eos enim sed molestias eum quia assumenda. Quis non, perferendis enim est labore nostrum iste. Obcaecati nam vero rem distinctio repudiandae iure consectetur facilis quidem illo dolor ipsa saepe temporibus eius numquam quam quas quod, tempora sapiente repellendus qui ipsam voluptate eum ut? Beatae ab culpa labore. Culpa ipsum pariatur labore distinctio sequi dolores dolorem omnis. Nesciunt, accusantium eaque amet repudiandae pariatur cum quaerat, culpa maxime a error mollitia minima sequi possimus optio odit porro quibusdam. Asperiores dignissimos fugiat et alias, iusto error doloremque. Harum, quam! Nisi at aspernatur quisquam quibusdam ipsam dolor perferendis culpa ipsum aliquid eligendi? Neque eius in eum dolor minima earum itaque pariatur laudantium nulla ducimus veritatis magnam impedit quo similique placeat quis illum cupiditate, at aperiam, nesciunt porro deserunt numquam cum. Pariatur ullam, nesciunt quae quam consequuntur aliquam saepe id cumque sit. Nemo magni minima veritatis quibusdam quam enim! Perspiciatis optio tempora saepe. Rem, nam. Ab corporis incidunt, dolorem temporibus possimus minus qui odit natus sequi sapiente optio ipsum, ipsam in assumenda veniam aliquam, deleniti iure quasi doloremque repellendus eos illum autem perspiciatis. Deleniti ipsa debitis, dignissimos quae ducimus dolor in laudantium fugit tempora delectus corrupti consequatur ut voluptatibus iusto error quibusdam rem est modi velit? Ea a asperiores nisi error iusto sequi odit deleniti nesciunt, vel adipisci praesentium repellat debitis voluptatum accusantium provident in ad ex voluptate animi beatae obcaecati reiciendis? Sed distinctio tempore unde dolorem atque deleniti rerum neque eveniet dolorum sequi fuga quas, dolore cum sunt ipsa quasi cumque aspernatur officia molestias suscipit. Ea dignissimos at autem aperiam magni voluptates reiciendis? Nihil sunt animi eum saepe officia dolore tempora recusandae. Error nulla maiores modi rerum molestias illo debitis! Unde omnis aspernatur quidem possimus iusto?</p>
            </div>

        </div>
    );
};

export default About;