import { motion as Motion } from "framer-motion";

const HoverCard = ({ img, title, desc }) => {
    return (
        <div className="relative overflow-hidden group md:h-80 border-2 md:w-60 py-8 px-5 rounded mb-5 bg-white">

            {/* Hover Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 
        translate-y-[100%] group-hover:translate-y-[0%] 
        transition-transform duration-700">
            </div>

            {/* Floating Logo */}
            <Motion.div
                className="w-10 h-10 md:h-[3.5vh] md:w-[4vw] bg-gradient-to-br rounded-full flex items-center justify-center md:mb-10 mb-5 "
                animate={{
                    y: ["0%", "-10%", "0%", "10%", "0%"],
                    x: ["-10%", "0%", "-10%", "0%", "-10%"],
                    rotate: [0, 0, 0, 0, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <img className="rounded group-hover:brightness-200 transition duration-300" src={img} alt="" />
            </Motion.div>

            {/* Title */}
            <p className="text-xl text-orange-600 mt-5 font-bold relative z-10 
         transition-colors duration-300">
                {title}
            </p>

            {/* Description */}
            <p className="relative z-10 text-slate-600 group-hover:text-violet-200 transition-colors duration-300">
                {desc}
            </p>
        </div>
    );
};

export default HoverCard;