import React from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-list">
                {experienceData.map((item, index) => (
                    <div key={index} className="experience-item">
                        <h3>{item.jobTitle}</h3>
                        <h4>{item.company}</h4>
                        <p>{item.duration}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;