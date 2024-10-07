import React from "react";
import logo from '../../assets/DortexAiWhite.png';
import location from '../../assets/location.png';
import email from '../../assets/email.png';

const Footr = () => {
    return (
        <div className="p-10 flex flex-col">
            <div className=" basis-[80%] flex flex-row justify-evenly">
                <div className="basis-[35%] pr-5">
                    <img src={logo} alt="" className=" w-24" />
                    <p className=" mt-4 max-w-100">"Share your IDEA and We Will Make It Real”. We ensure the true worth of the valuable time and money you invested in us by delivering the perfect product.</p>
                    <div className="pt-5">
                        <a class="inline-block  text-white no-underline p-3 rounded transition-colors duration-300 ease-in-out hover:bg-[#533aa7] me-2 w-10 h-10 text-center" href="https://x.com/dortex_ai" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="inline-block ] text-white no-underline p-3 rounded transition-colors duration-300 ease-in-out hover:bg-[#533aa7] me-2 w-10 h-10 justify-center text-center" href="https://www.facebook.com/profile.php?id=61561315643620" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="inline-block  text-white no-underline p-3 rounded transition-colors duration-300 ease-in-out hover:bg-[#533aa7] me-2 w-10 h-10 text-center" href="https://www.linkedin.com/company/dortex-ai/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a class="inline-block  text-white no-underline p-3 rounded transition-colors duration-300 ease-in-out hover:bg-[#533aa7] me-2 w-10 h-10 text-center" href="https://www.instagram.com/dortex_ai/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className=" basis-[17.5%]">
                    <h3 className=" text-xl font-bold">Important Links</h3>
                    <div className=" flex flex-col mt-6 p-2 gap-2">
                        <a href="#About">About Us</a>
                        <a href="">Careers</a>
                        {/* <a href="">Open Positions</a> */}
                        <a href="">Our Team</a>
                    </div>

                </div>
                <div className="basis-[17.5%]">
                    <h3 className="text-xl font-bold">Services</h3>
                    <ul className="flex flex-col mt-6 p-2 gap-2 list-disc">
                        <li>
                            <a href="/services/ai-solutions">Innovative AI Solutions</a>
                        </li>
                        <li>
                            <a href="/services/application-development">Application Development</a>
                        </li>
                        <li>
                            <a href="/services/web-development">Web Development</a>
                        </li>
                        <li>
                            <a href="/services/digital-marketing">Digital Marketing</a>
                        </li>
                        <li>
                            <a href="/services/ui-ux-design">UI/UX Design</a>
                        </li>
                        <li>
                            <a href="/services/recruitment-solutions">Recruitment Solutions</a>
                        </li>
                    </ul>
                </div>

                <div className="basis-[30%]">
                    <h3 className="text-xl font-bold">Get in Touch</h3>
                    <div className="flex p-1 mt-4">
                        <img src={location} alt="" className="w-7 h-7 p-1" />
                        <p className="p-1">Chandigarh Group of College, Landran Mohali Punjab</p>
                    </div>
                    <div className="flex p-1">
                        <img src={email} alt="" className="w-7 h7 p-1" />
                        <p className="p-1">info@dortexai.com</p>
                    </div>
                </div>
            </div>
            <hr className='mt-2' />
            <div className=" basis-[20%] pt-12 ">
                <p className="font-semibold">Copyright © 2024 DortexAI Pvt Ltd, All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footr;