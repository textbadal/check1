import React, { useState } from 'react';
import './CertificateVerification.css';
import axios from 'axios';

const CertificateVerification = () => {
  const [certificateIDs, setCertificateIDs] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVerify = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    const certificateArray = certificateIDs.split(',').map(id => id.trim());

    if (certificateArray.length === 0 || certificateArray.some(id => id === '')) {
      setError('Please enter valid certificate IDs.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://backend-51k4.onrender.com/api/certificates/verify', { certificateIDs: certificateArray });

      if (Array.isArray(response.data)) {
        setResult(response.data);
      } else {
        setResult({ message: 'No certificates found with the provided IDs.' });
      }
    } catch (error) {
      console.error('Error verifying certificates:', error);
      setError('Error verifying certificates. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="certificate-verification-container">
      <h2>Certificate Verification</h2>

      <textarea
        placeholder="Enter Certificate IDs"
        value={certificateIDs}
        onChange={(e) => setCertificateIDs(e.target.value)}
        rows="5"
        className="certificate-input"
      />

      <button
        onClick={handleVerify}
        disabled={loading}
        className={`verify-btn ${loading ? 'loading' : ''}`}
      >
        {loading ? 'Verifying...' : 'Verify Certificates'}
      </button>

      {error && <p className="error-message">{error}</p>}

      {result && (
        <div className="results-container">
          {Array.isArray(result) ? (
            result.map((certificate, index) => (
              <div key={index} className="certificate-card">
                <p><strong>Certificate ID:</strong> {certificate.certificateID}</p>
                <p><strong>Student Name:</strong> {certificate.studentName}</p>
                <p><strong>Course:</strong> {certificate.courseName}</p>
                <p><strong>Issued:</strong> {new Date(certificate.issueDate).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>{result.message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CertificateVerification;
