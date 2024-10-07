import React from 'react'
import whatsapp from '../../assets/whatsapp.png';

const ConnectForm = () => {
    return (
        <div className="connect-form-container">
            <div className="flex justify-between w-full px-2">
                <h1 className=" text-5xl text-customDark font-bold">Let's work Together</h1>
                <a className="hire_usinline-block bg-blue-900 text-white no-underline py-4 px-12 rounded-md text-base transition-colors duration-300 ease-in-out font-semibold hover:bg-purple-700 flex text-center" href="#hire ">
                    <img src={whatsapp} alt="" className=' w-5  me-1' />
                    WhatsApp</a>
            </div>
            <div className='flex p-3 pt-10'>
                <div className='text-customDark basis-[40%] animate-slide-in-left'>
                    <p className=' text-xl text-customLight pt-3'>Office:</p>
                    <h3 className=' text-3xl font-bold text-customDark pt-3'>Chandigarh Group of college, Landran Mohali Punjab</h3>
                    <hr className='w-100 mt-1' />
                    <p className=' text-xl text-customLight pt-3'>Email:</p>
                    <h3 className='text-3xl font-bold pt-3'>info@dortexai.com</h3>
                    <hr className='w-100 mt-1' />
                    <p className=' text-xl text-customLight pt-3'>Follow us:</p>
                    <div class="pt-3">
                        <a class="inline-block bg-[#0c1274] text-white no-underline p-3 rounded transition-colors duration-300 ease-in-out hover:bg-[#533aa7] me-2 w-10 h-10 text-center" href="https://x.com/dortex_ai" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="inline-block bg-[#0c1274] text-white no-underline p-3 rounded transition-colors duration-300 ease-in-out hover:bg-[#533aa7] me-2 w-10 h-10 justify-center text-center" href="https://www.facebook.com/profile.php?id=61561315643620" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="inline-block bg-[#0c1274] text-white no-underline p-3 rounded transition-colors duration-300 ease-in-out hover:bg-[#533aa7] me-2 w-10 h-10 text-center" href="https://www.linkedin.com/company/dortex-ai/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a class="inline-block bg-[#0c1274] text-white no-underline p-3 rounded transition-colors duration-300 ease-in-out hover:bg-[#533aa7] me-2 w-10 h-10 text-center" href="https://www.instagram.com/dortex_ai/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className='text-customDark basis-[60%] p-6 pl-5 animate-slide-in-right'>
                    <div class="lg:col-span-7 md:col-span-6">
                        <form id="contact-form">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pb-6">
                                <div class="col-span-1">
                                    <div class="relative">
                                        <input type="text" id="name" placeholder="Your Name" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                                    </div>
                                </div>
                                <div class="col-span-1">
                                    <div class="relative">
                                        <input type="email" id="email" placeholder="Your Email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <div class="relative">
                                        <input type="text" id="subject" placeholder="Subject" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <div class="relative">
                                        <textarea id="message" placeholder="Leave a message here" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"></textarea>

                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <button type="submit" class="inline-block bg-[#0c1274] text-white no-underline py-4 px-12 rounded-md text-base font-semibold transition duration-300 hover:bg-[#533aa7]">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ConnectForm;
