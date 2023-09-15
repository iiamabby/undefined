import React, { useState } from 'react';

const PathStepBox = ({ step }) => { // Receive a single step as a prop
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < step.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Get the current step using currentStep
console.log(step.content)
  return (
    <div>
     <h4>{step.content}</h4>
     {step.skills.map((skill, index) => (
    <div key={index}>
        <p><strong>Name:</strong> {skill.name}</p>
        <p><strong>Description:</strong> {skill.description}</p>
        <p style={{ color: 'red' }}>{skill.type} skill</p>
    </div>
    ))}


      {step.resources && step.resources.length > 0 && (
        <div>
          <h3>Learning Resources:</h3>
          <ul>
            {step.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}


    </div>
  );
};

export default PathStepBox;
