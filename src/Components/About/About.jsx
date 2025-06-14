import { NavLink } from "react-router-dom";
import html5 from "../../assets/icons/HTML.png"
import Css from "../../assets/icons/CSS.png"
import Tailwind from "../../assets/icons/Tailwind.png"
import Javascript from "../../assets/icons/JavaScript.png"
import React from "../../assets/icons/React2.png"
import FireBase from "../../assets/icons/Firebase.png"
import Nodejs from "../../assets/icons/Nodejs2.png"
import Mongodb from "../../assets/icons/mongo.png"
import Dom from "../../assets/icons/ReactRouterDom.png"





const About = () => {
    return (
        <div className="md:ml-[26vw] md:h-[90vh] overflow-hidden md:w-[60vw] pt-10 ">
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
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={html5} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">HTML 5</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Css} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">CSS</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Tailwind} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">Tailwind</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Javascript} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">JavaScript</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                           <img className="md:h-[10vh] md:w-[5vw] rounded" src={React} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">React Js</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Dom} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">React Router Dom</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                    </div>
                    <div className="md:flex justify-around p-5 mx-auto">
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Nodejs} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">Node Js</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                           <img className="md:h-[10vh] md:w-[5vw] rounded" src={FireBase} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">Firebase</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                        <div className="md:h-80 border-2 md:w-60 p-5 rounded mb-5">
                            <img className="md:h-[10vh] md:w-[5vw] rounded" src={Mongodb} alt="" />
                            <p className="text-xl text-orange-600 mt-5 font-bold">Mongo Db</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt porro modi eveniet dicta asperiores,
                                nesciunt aspernatur a ad omnis nemo.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;