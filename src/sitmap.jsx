import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SitemapManager = () => {
  const [isSitemapGenerated, setIsSitemapGenerated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Add success state

  const generateSitemap = async () => {
    setIsSubmitting(true);
    try {
      await axios.get('http://localhost:5000/sitemap.xml'); //
      setIsSitemapGenerated(true);
      setSubmissionError(null);
    } catch (error) {
      console.error(error);
      setSubmissionError('Error generating sitemap. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const submitSitemap = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/submit-sitemap'); 
      console.log('Sitemap submission response:', response.data);
    } catch (error) {
      console.error(error);
      setSubmissionError('Error submitting sitemap. Please check your connection or contact your search engine provider.');
    } finally {
      setIsSubmitting(false);
    }
    if (response.status === 200) {
      setSubmissionSuccess(true); 
      setSubmissionError(null);
      console.log('Sitemap submitted successfully!');
    }
  };
  useEffect(() => {
    const checkForGeneratedSitemap = async () => {
      try {
        const response = await axios.get('http://localhost:5000/sitemap.xml'); // Adjust URL if necessary
        if (response.status === 200) {
          setIsSitemapGenerated(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkForGeneratedSitemap();
  }, []);

  return (
    <div>
      <h2>Sitemap Management</h2>
      {isSitemapGenerated ? (
        <div>
          <p>Sitemap has been generated.</p>
          <button disabled={isSubmitting} onClick={submitSitemap}>
            {isSubmitting ? 'Submitting...' : 'Submit Sitemap'}
          </button>
          {submissionSuccess && <p className="success">Sitemap submitted successfully!</p>}
          {submissionError && <p className="error">{submissionError}</p>}
        </div>
      ) : (
        <button onClick={generateSitemap}>Generate Sitemap</button>
      )}
    </div>
  );
};

export default SitemapManager;
