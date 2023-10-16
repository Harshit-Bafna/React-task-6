// Interests.js

import React from 'react';
import './Interests.css';

const Interests = () => {
    return (
        <section className="interests">
            <div className="section-title">
                <h2>Interests</h2>
            </div>
            <div className="interests-container">
                <div className="interest-card">
                    <h3>Hobbies</h3>
                    <ul>
                        <li>Drawing</li>
                        <li>Playing Games</li>
                        <li>Watching Movies</li>
                    </ul>
                </div>
                <div className="interest-card">
                    <h3>Languages</h3>
                    <ul>
                        <li>English</li>
                        <li>Hindi</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Interests;
