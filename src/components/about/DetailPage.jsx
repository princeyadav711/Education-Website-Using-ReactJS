import React from 'react';
import { useParams } from 'react-router-dom';
import { homeAbout } from '../../dummydata';
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const item = homeAbout.find((val) => val.id === parseInt(id));

  return (
    <div className="detailContainer">
      {item ? (
        <>
          <h2>{item.title}</h2>
          <img src={item.cover} alt={item.title} />
          <p>{item.desc}</p>

          {item.expertDetails && (
            <>
              <h3>Why Learn with Experts?</h3>
              <ul>
                {item.expertDetails.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              <h3>Expert Credentials</h3>
              <ul>
                {item.expertDetails.expertCredentials.map((credential, index) => (
                  <li key={index}>{credential}</li>
                ))}
              </ul>

              <h3>Interactive Learning Opportunities</h3>
              <p><strong>Live Sessions:</strong> {item.expertDetails.interactiveLearning.liveSessions}</p>
              <p><strong>Project Guidance:</strong> {item.expertDetails.interactiveLearning.projectGuidance}</p>
              <p><strong>Mentorship:</strong> {item.expertDetails.interactiveLearning.mentorship}</p>
            </>
          )}
        </>
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
};

export default DetailPage;
