import React from "react";

// Import your custom icons
import webDevelopmentIcon from "../../assets/Icons/Web.png";
import recruitmentIcon from "../../assets/Icons/Recruitment.png";
import aiSolutionsIcon from "../../assets//Icons/AI.png";
import mobileAppIcon from "../../assets/Icons/App.png";
import digitalMarketingIcon from "../../assets/Icons/Digital-marketing.png";
import uiuxDesignIcon from "../../assets/Icons/UI-UX.png";

const Services = () => {
  const serviceData = [
    {
      icon: aiSolutionsIcon,
      title: 'Innovative AI Solutions',
      description: 'Empower your business with tailored AI services, delivering advanced AI solutions, including machine learning and automation.',
    },
    {
      icon: mobileAppIcon,
      title: 'Mobile Application',
      description: 'Elevate your business efficiency by introducing its app with us using any framework from Android Studio to React.',
    },
    {
      icon: webDevelopmentIcon,
      title: 'Website Development',
      description: 'We provide customized Web Development solutions for the satisfaction of our customers worldwide, ranging from new businesses to established organizations.',
    },
    {
      icon: digitalMarketingIcon,
      title: 'Digital Marketing',
      description: 'A robust online presence is essential for businesses, and we can help you navigate the digital marketing landscape.',
    },
    {
      icon: uiuxDesignIcon,
      title: 'UI/UX Design',
      description: 'Our team creates designs that reflect your tastes using tools like Adobe, Photoshop, and CorelDRAW.',
    },
    {
      icon: recruitmentIcon,
      title: 'Recruitment Solutions',
      description: 'Hiring developers and designers remotely can result in significant financial benefits and access to niche expertise.',
    },
  ];
  return (
    <>
      {/* <div style={{display:'flex', justifyContent:'space-between', width:'100%', padding: '0rem 1rem'}}> */}
      <div className="flex justify-between w-full px-2">
        <h1 className="text-5xl text-center text-customDark font-bold w-full md:w-auto">Our Services</h1>
        <a className="hidden md:inline-block bg-blue-900 text-white no-underline py-4 px-12 rounded-md text-base transition-colors duration-300 ease-in-out font-semibold hover:bg-purple-700" href="#hire">
          Hire Us
        </a>
      </div>

      <div className="grid_container">
        {serviceData.map((service, index) => (
          <div key={index} className="flex flex-col gap-2 border-2 px-1 py-3">
            <div className="aspect-square mx-auto w-1/4">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="flex flex-col gap-2 px-3">
              <h2 className="text-center text-lg font-bold">{service.title}</h2>
              <p className=" text-customLight">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
