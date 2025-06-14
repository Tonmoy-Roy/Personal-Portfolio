import porfileimg from "../../assets/profile.png"
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from "react";
import img1 from "../../assets/fantasy.jpg";
import img2 from "../../assets/varun-yadav-QhYTCG3CTeI-unsplash.jpg";
import img3 from "../../assets/venti-views-GGwBS_kuKB0-unsplash.jpg";

const About = () => {

    const backgroundImages = [img1, img2, img3];

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // Start fading out
            setFade(false);

            // After fade out completes, change image and fade back in
            setTimeout(() => {
                setBackgroundIndex((prev) => (prev + 1) % backgroundImages.length);
                setFade(true);
            }, 500); // This should match your CSS transition duration
        }, 6000); // change every 4 seconds

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const backgroundimg = backgroundImages[backgroundIndex];
    return (
        <div class="relative bg-gray-100 min-h-screen">
            {/* <!-- Cover Background --> */}
            <div className="md:w-[29vw] h-72 bg-cover bg-center " style={{ backgroundImage: `url(${backgroundimg})` }}></div>


            {/* <!-- Profile Card --> */}
            <div class="w-[90%] max-w-md bg-white rounded-t-[80px] shadow-lg -mt-20 pt-20 pb-10 px-6 text-center">
                {/* <!-- Profile Image --> */}
                <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white -mt-20">
                    <img src={porfileimg} alt="Profile" class="w-full h-full object-cover" />
                </div>

                {/* <!-- Name & Title --> */}
                <h2 class="text-2xl font-bold mt-4">Tony Ryan</h2>
                <p class="text-yellow-500 font-medium">Programmer</p>

                {/* <!-- Social Icons --> */}
                <div class="flex justify-center gap-4 mt-4 text-xl text-gray-600">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-x-twitter"></i>
                    <i class="fab fa-github"></i>
                    <i class="fab fa-stack-overflow"></i>
                    <i class="fab fa-whatsapp"></i>
                </div>

                {/* <!-- Buttons --> */}
                <div class="flex justify-between mt-6 text-sm font-semibold">
                    <button class="w-1/2 py-2 border-r border-gray-200">DOWNLOAD CV</button>
                    <button class="w-1/2 py-2">CONTACT ME</button>
                </div>
            </div>
        </div>


    );
};

export default About;