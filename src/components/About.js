import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <div className="about-image">
                    <img
                        src="https://media.licdn.com/dms/image/D4D03AQE3jw-O_1vpLg/profile-displayphoto-shrink_800_800/0/1683998464383?e=1702512000&v=beta&t=4-qBmIdF6V1X9t2I58zvYskPvp1DkfJkBk3XZHjAagY"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
                <div className="about-details">
                    <h2>About Me</h2>
                    <p>Hi, I'm Harshit Bafna, a web developer and tech enthusiast. My passion is to create meaningful and user-friendly web experiences. I believe in the power of technology to make a positive impact, whether it's through crafting beautiful, responsive websites, developing powerful web applications, or solving complex coding challenges. I'm here to bring your ideas to life and collaborate on projects that push the boundaries of digital innovation. Let's make the web a more engaging and functional place, one project at a time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
