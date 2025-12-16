import youtube from "../../assets/icons/10039.jpg"
import Ecommerce from "../../assets/icons/ecommerce-tech-trends_0.jpg"
import cloth from "../../assets/icons/auth.avif"
import Food from "../../assets/icons/Food.png"
import Movie from "../../assets/icons/movie.jpg"
import salis from '../../assets/icons/Dashboard Mockup 1.2 1.png'
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <div className="md:ml-[22vw] md:h-[90vh] overflow-hidden md:w-[60vw] pt-10 text-left">
            <div className="h-full overflow-y-auto">
                <p className="text-xl font-semibold text-gray-200"><span className="text-yellow-600">W</span>orks</p>
                <p className="divider md:w-[30vw] bg-gray-600 h-[1px]"></p>
                <div className='md:grid grid-cols-3 gap-8'>
                    <div className="border border-gray-600 rounded-xl overflow-hidden group shadow-md hover:shadow-xl mb-5">
                        <figure>
                            <img
                                src={youtube}
                                alt="YouTube"
                                className="md:h-[31vh] md:w-[18.5vw] mx-auto transition-transform duration-700 group-hover:scale-105 rounded-lg"
                            />
                        </figure>
                        <div className="card-body bg-slate-700">
                            <h2 className="card-title justify-center font-bold text-xl mb-3 text-white">
                                Jewellery Shopping
                            </h2>
                            <div className="card-actions justify-center gap-5">
                                <Link to="https://jewellery-shopping-fn4z.vercel.app/">
                                    <button className="btn btn-neutral glow-on-hover">
                                        Live Demo
                                    </button>
                                </Link>
                                <Link to="https://github.com/Tonmoy-Roy/Jewellery-Shopping">
                                    <button className="btn btn-neutral hover:bg-black text-white transition duration-300">
                                        GitHub
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-600 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-slate-700 mb-5">
                        <figure>
                            <img
                                src={Food}
                                alt="Cyber-Cafe"
                                className="md:h-[31vh] md:w-[18.5vw] rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105 rounded-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-xl text-white mb-3 md:w-[17vw] text-center">Food Ordering System</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://restaurant-management-70a73.web.app/"><button className="btn btn-neutral glow-on-hover">Live Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/Restaurant-Management-System-cs"><button className='btn btn-neutral hover:bg-black text-white transition duration-300'>Github</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-600 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-slate-700 mb-5">
                        <figure>
                            <img
                                src={Movie}
                                alt="Cyber-Cafe"
                                className="md:h-[31vh] md:w-[18.5vw] rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-xl text-white mb-3">Movie Watchlist</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://movie-verse-76e61.web.app/"><button className="btn btn-neutral glow-on-hover">Live Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/Movie-Verse-cs"><button className='btn btn-neutral hover:bg-black text-white transition duration-300'>Github</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-600 rounded-xl overflow-hidden group shadow-md hover:shadow-xl mb-5 bg-white">
                        <figure>
                            <img
                                src={salis}
                                alt="Cyber-Cafe"
                                className="md:h-[31vh] md:w-[18.5vw mx-auto transition-transform duration-700 group-hover:scale-105 rounded-lg"
                            />
                        </figure>
                        <div className="card-body bg-slate-700">
                            <h2 className="card-title justify-center font-bold text-xl text-white mb-3">Salis Erp Landing Page</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://boisterous-phoenix-758565.netlify.app/"><button className="btn btn-neutral glow-on-hover">Live Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/Gadget-Heaven-Router"><button className='btn btn-neutral hover:bg-black text-white transition duration-300'>Github</button></Link>
                            </div>
                        </div>
                    </div>


                    <div className="border border-gray-600 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-slate-700 mb-5">
                        <figure>
                            <img
                                src={cloth}
                                alt="Cyber-Cafe"
                                className="h-[35vh] w-[90vw] md:h-[31vh] md:w-[18.5vw] rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-xl text-white mb-3">Donate Authentication</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://clothing-donation-fe0e7.web.app/"><button className="btn btn-neutral glow-on-hover"> Live Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/Clothing-Donation-Authentication"><button className='btn btn-neutral hover:bg-black text-white transition duration-300'>Github</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-600 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-slate-700 mb-5">
                        <figure>
                            <img
                                src={Ecommerce} alt="Cyber-Cafe"
                                className="md:h-[31vh] md:w-[18.5vw] rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-xl text-white  mb-3">Qtech Ecommerce</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://ephemeral-stroopwafel-0b1394.netlify.app/">
                                    <button className="btn btn-neutral glow-on-hover">Live Demo</button>
                                </Link>
                                <Link to="https://github.com/Tonmoy-Roy/Qtech-ECommerce">
                                    <button className="btn btn-neutral hover:bg-black text-white transition duration-300">GitHub</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Works;