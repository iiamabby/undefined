import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import jsPDF from 'jspdf';

const PathStepBox = ({ step }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < (step.details || []).length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let yOffset = 10;
    let xOffset = 10;

    doc.text(String(step.title), 10, yOffset);
    yOffset += 15;

    if (step.steps) {
      step.steps.forEach((s, stepIndex) => {
        yOffset = 10;

        s.details.forEach((deets) => {
          doc.setFontSize(12);
          yOffset += 10;
          xOffset = 10;

          doc.setFontSize(10);
          doc.text(`Name:`, xOffset, yOffset);
          const nameLines = doc.splitTextToSize(String(deets.title), 150);
          doc.text(nameLines, xOffset + 15, yOffset);
          yOffset += (nameLines.length * 7) + 10;

          doc.text(`Description:`, xOffset, yOffset);
          const descriptionLines = doc.splitTextToSize(String(deets.content), 150);
          doc.text(descriptionLines, xOffset + 25, yOffset);
          yOffset += (descriptionLines.length * 7) + 15;

          xOffset = 10;

          deets.skills.forEach((skill) => {
            doc.text(`Skill:`, xOffset, yOffset);
            const skillLines = doc.splitTextToSize(String(skill.title), 145);
            doc.text(skillLines, xOffset + 20, yOffset);
            yOffset += (skillLines.length * 7) + 10;
            xOffset = 10;

            if (skill.resource) {
              doc.text(`Resource:`, xOffset, yOffset);
              const resourceLines = doc.splitTextToSize(String(skill.resource), 140);
              doc.text(resourceLines, xOffset + 20, yOffset);
              yOffset += (resourceLines.length * 7) + 10;
              xOffset = 10;
            }
          });

          yOffset += 10;
        });

        yOffset += 10;
      });
    }

    doc.save('path.pdf');
  };

  return (
    <div>
      <h4>{step.title}</h4>
      <p>{step.desc}</p>
      <button onClick={generatePDF}>Download PDF</button>
      {step.steps ? (
        step.steps.map((item, index) =>
          item.details.map((deets, deetsIndex) => (
            <div key={deetsIndex}>
              <p>
                <strong>Name:</strong> {deets.title}
              </p>
              <p>
                <strong>Description:</strong> {deets.content}
              </p>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Resources</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="skills-list">
                    {deets.skills &&
                      deets.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>
                          <strong>{skill.title}:     </strong> 
                          {skill.resource && (
                            <a href={skill.resource} target="_blank" rel="noopener noreferrer">
                               Getting started 
                            </a>
                          )}
                        </li>
                      ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          ))
        )
      ) : (
        step.details.map((s, index) => (
          <div key={index}>
            <p>{s.title}</p>
            {s.skills.map((i, skillIndex) => (
            <p key={skillIndex}>{i.title}</p>
            ))}
          </div>
        ))
      )}
    </div>
  )
}

export default PathStepBox;
