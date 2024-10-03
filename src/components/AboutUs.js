import React from 'react';
import '../App.css'; // Ensure this file has the appropriate styles
import company from '../assests/images/company.jpg'

const teammates = [
  {
    name: 'Prathyusha',
    image: require('../assests/images/prathyusha.jpg'),
  },
  {
    name: 'Harshitha',
    image: require('../assests/images/harshitha.jpg'),
  },
  {
    name: 'Sathwick',
    image: require('../assests/images/student3.jpg'),
  }
];

// Company details
const companyDetails = {
  name: 'HealthyHeads',
  description: 'At HealthyHeads, we are dedicated to transforming the mental health landscape for students. We believe that everyone deserves access to mental health resources and support.',
  image: company, // Path to your company image
  interestingFacts: [
    "Did you know that 1 in 5 students experience mental health issues during their academic journey?",
    "Our team conducts regular workshops and seminars to promote mental well-being among students.",
    "We partner with local organizations to provide students with the resources they need for a healthier mind."
  ],
};

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>

      {/* Company Information Section */}
      <div className="company-info">
        <img src={companyDetails.image} alt={companyDetails.name} className="company-image" />
        <h2>{companyDetails.name}</h2>
        <p>{companyDetails.description}</p>

        {/* Interesting Facts Section */}
        <div className="interesting-facts">
          <h3>Interesting Facts</h3>
          <ul>
            {companyDetails.interestingFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Meet Our Team</h2>
      <div className="teammates">
        {teammates.map((teammate, index) => (
          <div className="teammate" key={index}>
            <img src={teammate.image} alt={teammate.name} className="teammate-image" />
            <h3>{teammate.name}</h3>
            <p>{teammate.role}</p>
          </div>
        ))}
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions or need support, feel free to reach out:</p>
        <p>Email: contact@healthyheads.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default AboutUs;
