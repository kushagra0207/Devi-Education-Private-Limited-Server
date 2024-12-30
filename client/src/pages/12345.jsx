import React from 'react';

export const DeveloperTeam = () => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%', // Default width for smaller screens
    maxWidth: '600px', // Restrict max width
    margin: '50px auto', // Center the card horizontally
    borderRadius: '10px',
    border: '1px solid #ccc',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const imageStyle = {
    height: '350px',
    width: '350px',
    // borderRadius: '50%',
    marginBottom: '20px',
  };

  const textStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    color: 'red',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img
          src="/Images/Kushagra_gupta.jpg"
          alt="Profile"
          style={imageStyle}
        />
        <div style={textStyle}>
          <h1>Kushagra Gupta</h1>
          <h2>Founder & CEO</h2>
        </div>
      </div>
      <style>
        {`
        @media (min-width: 768px) {
          div[style*="maxWidth"] {
            max-width: 800px; /* Larger width for medium screens */
          }
        }
        @media (min-width: 1024px) {
          div[style*="maxWidth"] {
            max-width: 1000px; /* Larger width for large screens */
          }
          img[style*="height"] {
            height: 200px;
            width: 200px; /* Larger image for large screens */
          }
          div[style*="padding"] {
            padding: 40px; /* Increase padding on larger screens */
          }
        }
        `}
      </style>
    </div>
  );
};
