import youtube from "../../assets/icons/youtube.png"
import cyber from "../../assets/icons/vitaly-gariev-1JnN9QhmTGU-unsplash.jpg"
import gadget from "../../assets/icons/Products.avif"
import cloth from "../../assets/icons/cloth.jpg"
import Restaurant from "../../assets/icons/Food.avif"
import Movie from "../../assets/icons/jakob-owens-CiUR8zISX60-unsplash.jpg"
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <div className="md:ml-[22vw] md:h-[90vh] overflow-hidden md:w-[60vw] pt-10 text-left">
            <div className="h-full overflow-y-auto">
                <p className="text-2xl"><span className="text-yellow-600">W</span>orks</p>
                <p className="divider md:w-[30vw]"></p>
                <div className='md:grid grid-cols-3 gap-8'>
                    <div className="border-2 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-gradient-to-br mb-5">
                        <figure>
                            <img
                                src={youtube}
                                alt="YouTube"
                                className="md:h-48 rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-xl mb-3">
                                YouTube
                            </h2>
                            <div className="card-actions justify-center gap-5">
                                <Link to="https://roaring-selkie-6f3214.netlify.app/">
                                    <button className="btn btn-neutral">
                                        Live Demo
                                    </button>
                                </Link>
                                <Link to="https://github.com/Tonmoy-Roy/You-Tube">
                                    <button className="btn btn-neutral hover:bg-black text-white transition duration-300">
                                        GitHub
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="border-2 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-gradient-to-br mb-5">
                        <figure>
                            <img
                                src={cyber} alt="Cyber-Cafe"
                                className="md:h-48 rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-xl  mb-3">Qtech-Ecommerce</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://ephemeral-stroopwafel-0b1394.netlify.app/">
                                    <button className="btn btn-neutral">Live Demo</button>
                                </Link>
                                <Link to="https://github.com/Tonmoy-Roy/Qtech-ECommerce">
                                    <button className="btn btn-neutral hover:bg-black text-white transition duration-300">GitHub</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-gradient-to-br mb-5">
                        <figure>
                            <img
                                src={gadget}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-xl mb-3">Gadget-Heaven</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://boisterous-phoenix-758565.netlify.app/"><button className="btn btn-neutral">Live Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/Gadget-Heaven-Router"><button className='btn btn-neutral hover:bg-black text-white transition duration-300'>Github</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-gradient-to-br mb-5">
                        <figure>
                            <img
                                src={cloth}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105 md:w-[18vw]"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-xl mb-3">Donate-Authentication</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://clothing-donation-fe0e7.web.app/"><button className="btn btn-neutral"> Live Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/Clothing-Donation-Authentication"><button className='btn btn-neutral hover:bg-black text-white transition duration-300'>Github</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-gradient-to-br mb-5">
                        <figure>
                            <img
                                src={Restaurant}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-xl mb-3 md:w-[17vw]">Restaurant-Management</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://restaurant-management-70a73.web.app/"><button className="btn btn-neutral">Live Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/Restaurant-Management-System-cs"><button className='btn btn-neutral hover:bg-black text-white transition duration-300'>Github</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 rounded-xl overflow-hidden group shadow-md hover:shadow-xl bg-gradient-to-br mb-5">
                        <figure>
                            <img
                                src={Movie}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded-lg mx-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-xl mb-3">Movie-Verse</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://movie-verse-76e61.web.app/"><button className="btn btn-neutral">Live Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/Movie-Verse-cs"><button className='btn btn-neutral hover:bg-black text-white transition duration-300'>Github</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;