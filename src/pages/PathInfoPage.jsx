import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import PathStepBox from '../components/PathStepBox';

const PathInfoPage = ({ pathways }) => {
  const { id } = useParams();
  const location = useLocation();
  const updatedList = location.state ? location.state.updatedList : null;
  const path = pathways[id];
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < (updatedList || path.steps).length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!path) {
    return <div>Path not found</div>;
  }

  const steps = updatedList || path.steps;
  const currentStepContent = steps[currentStep];

  return (
    <div>
      <h1>{path.title}</h1>
      <p>{path.desc}</p>
      <p>Average Pay: ${path.pay}</p>

      <div>
        <h2>Step {currentStep + 1}</h2>
        <PathStepBox step={currentStepContent} /> {/* Pass the current step data */}
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous Step
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next Step
        </button>
      </div>

      {path.skills && path.skills.length > 0 && (
        <div>
          <h2>Skills You'll Gain:</h2>
          <ul>
            {path.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                <strong>{skill.name}:</strong> {skill.description}{' '}
                <span style={{ color: 'red' }}>{skill.type} skill</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PathInfoPage;
