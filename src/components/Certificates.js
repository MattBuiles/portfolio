import React, { useEffect, useState } from 'react';
import certificatesData from '../data/certificates.json';

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        setCertificates(certificatesData);
    }, []);

    return (
        <section id="certificates">
            <h2>Certifications</h2>
            <div className="certificates-list">
                {certificates.map((certificate, index) => (
                    <div key={index} className="certificate-item">
                        <h3>{certificate.title}</h3>
                        <p>Issued by: {certificate.issuer}</p>
                        <p>Date: {certificate.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;