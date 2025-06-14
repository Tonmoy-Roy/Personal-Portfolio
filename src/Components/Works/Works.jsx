import React from 'react';
import youtube from "../../assets/icons/youtube.png"
import cyber from "../../assets/icons/cyber.jpg"
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
                    <div className="border-4">
                        <figure>
                            <img
                                src={youtube}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded mx-auto"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-center mb-3">YouTube</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://roaring-selkie-6f3214.netlify.app/"><button className="btn btn-neutral">Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/You-Tube"><button className='btn btn-neutral'>Code</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-4">
                        <figure>
                            <img
                                src={cyber}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded"
                            />
                        </figure>

                        <div className="card-body p-4">
                            <h2 className="card-title justify-center mb-3">Cyber-Cafe</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://cyber-cafe-1.surge.sh/">
                                    <button className="btn btn-neutral">Demo</button>
                                </Link>
                                <Link to="https://github.com/Tonmoy-Roy/You-Tube">
                                    <button className="btn btn-neutral">Code</button>
                                </Link>
                            </div>
                        </div>
                    </div>



                    <div className="border-4">
                        <figure>
                            <img
                                src={gadget}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-center mb-3">Gadget-Heaven</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://boisterous-phoenix-758565.netlify.app/"><button className="btn btn-neutral">Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/You-Tube"><button className='btn btn-neutral'>Code</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-4">
                        <figure>
                            <img
                                src={cloth}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded md:w-[18vw]"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-center mb-3">Clothing-Donation</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://clothing-donation-fe0e7.web.app/"><button className="btn btn-neutral">Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/You-Tube"><button className='btn btn-neutral'>Code</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-4">
                        <figure>
                            <img
                                src={Restaurant}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-center mb-3">Restaurant-Management</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://restaurant-management-70a73.web.app/"><button className="btn btn-neutral">Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/You-Tube"><button className='btn btn-neutral'>Code</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-4">
                        <figure>
                            <img
                                src={Movie}
                                alt="Cyber-Cafe"
                                className="md:h-48 rounded"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-center mb-3">Movie-verse</h2>
                            <div className="card-actions justify-evenly">
                                <Link to="https://movie-verse-76e61.web.app/"><button className="btn btn-neutral">Demo</button></Link>
                                <Link to="https://github.com/Tonmoy-Roy/You-Tube"><button className='btn btn-neutral'>Code</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;