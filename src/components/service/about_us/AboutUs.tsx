import React from 'react';
import { FaLightbulb, FaPhoneAlt } from 'react-icons/fa';
import './AboutUs.css'

const AboutUs: React.FC = () => {
    return (
        <div className="container-fluid py-5 bg-gray-100">
            <div className="container py-5">
                <div className="flex flex-wrap gap-5 items-center">
                    <div className="w-full xl:w-7/12 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h4 className="text-blue-500">About Us</h4>
                            <h1 className="text-4xl font-bold mb-4">Meet our company unless miss the opportunity</h1>
                            <p className="mb-4 text-gray-700">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum velit temporibus repudiandae ipsa, eaque perspiciatis cumque incidunt tenetur sequi reiciendis.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                                    <div className="flex items-start">
                                        <FaLightbulb className="text-blue-500 text-3xl" />
                                        <div className="ml-4">
                                            <h4 className="text-xl font-semibold">Business Consulting</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                                    <div className="flex items-start">
                                       
                                        <div className="ml-4">
                                            <h4 className="text-xl font-semibold">Year Of Expertise</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <a href="#" className="bg-blue-500 text-white rounded-full py-3 px-5 inline-block">Discover Now</a>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-start">
                                        <FaPhoneAlt className="text-blue-500 text-2xl mr-4" />
                                        <div>
                                            <h4 className="text-xl font-semibold">Call Us</h4>
                                            <p className="text-lg text-gray-700">+01234567890</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-5/12 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="relative bg-blue-500 rounded-lg overflow-hidden">
                            <img src="img/about-2.png" className="w-full rounded-lg" alt="About Us" />
                            
                            <div className="absolute top-[-15px] right-[-15px]">
                                <img src="img/about-3.png" className="w-36 h-36 opacity-70" alt="Decorative" />
                            </div>
                            <div className="absolute top-[-20px] left-2 transform rotate-90">
                                <img src="img/about-4.png" className="w-24 h-36 opacity-90" alt="Decorative" />
                            </div>
                            <div className="rounded-b-lg">
                                <img src="img/about-5.jpg" className="w-full rounded-b-lg" alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
