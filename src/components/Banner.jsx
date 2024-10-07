import React, { useState, useEffect } from 'react';
import './Banner.css';
import robot from '../assets/profile.png';

const Banner = () => {
    const skills = [
        'Innovative AI Solutions',
        'Web Designing',
        'Web Development',
        'Application Development',
        'Quality Assurance',
        'UX/UI Designing',
        'Digital Marketing',
        'Remote Hiring',
        'Recruitment Services'
    ];

    const [currentSkill, setCurrentSkill] = useState('');
    const [skillIndex, setSkillIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Typewriter effect logic
    useEffect(() => {
        if (charIndex < skills[skillIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentSkill((prev) => prev + skills[skillIndex].charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, 100); // Adjust the speed by changing the timeout duration
            return () => clearTimeout(timeout);
        } else if (charIndex === skills[skillIndex].length) {
            setTimeout(() => {
                setCharIndex(0);
                setCurrentSkill('');
                setSkillIndex((prev) => (prev + 1) % skills.length);
            }, 1500); // Pause before typing the next skill
        }
    }, [charIndex, skillIndex, skills]);

    return (
        <>
            <div className='hero_container'>
                <div className='hero p-5  pl-16 pt-20'>
                    <h3>We Are</h3>
                    <h1 className='shadow-text'>Building robust strategies to build brands.</h1>
                    <div className="typed-text">
                        {currentSkill}
                        <span className="cursor">|</span> {/* Blinking cursor */}
                    </div>
                    <div>
                        <a className='services_btn' href="#myservices">Explore our Services</a>
                    </div>
                </div>
                <div className='Image'>
                    <img src={robot} alt="robot" />
                </div>
            </div>
        </>
    );
};

export default Banner;
