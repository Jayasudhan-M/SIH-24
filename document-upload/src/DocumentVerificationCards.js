import React from 'react';
import './DocumentVerificationCards.css';

const documents = [
  { name: 'Aadhaar', description: 'Verify Aadhaar card details.', icon: 'id-card' },
  { name: 'School Transcripts', description: 'Verify school transcripts.', icon: 'book' },
  { name: 'Birth Certificates', description: 'Verify birth certificates.', icon: 'certificate' },
  { name: 'Mark Sheets', description: 'Verify mark sheets.', icon: 'clipboard' },
];

const DocumentVerificationCards = () => {
  return (
    <div className="card-container">
      {documents.map((doc, index) => (
        <div key={index} className="card">
          <div className={`card-icon fa fa-${doc.icon}`} />
          <div className="card-title">{doc.name}</div>
          <p className="card-description">{doc.description}</p>
          <button className="card-button">Verify Now</button>
        </div>
      ))}
    </div>
  );
};

export default DocumentVerificationCards;
