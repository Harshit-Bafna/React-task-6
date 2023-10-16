import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section className="education">
            <h2 className="section-title">Education</h2>
            <div className="education-container">
                <div className="education-card">
                    <h3>B. Tech (CSE) Core</h3>
                    <p>June 2021 – Ongoing</p>
                    <p>Vellore Institute of Technology, Bhopal</p>
                    <p>9.06/10</p>
                </div>
                <div className="education-card">
                    <h3>Class XII</h3>
                    <p>May 2021</p>
                    <p>Macro Vision Academy, Burhanpur</p>
                    <p>85.2%</p>
                </div>
                <div className="education-card">
                    <h3>Class X</h3>
                    <p>May 2019</p>
                    <p>St. Mary’s School, Barwaha</p>
                    <p>83.2%</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
