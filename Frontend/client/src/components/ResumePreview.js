import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteResume, getAISuggestions } from '../actions/resumeActions';

const ResumePreview = ({ resume }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteResume(resume._id));
  };

  const onGetSuggestions = () => {
    const jobDescription = prompt('Enter the job description:');
    if (jobDescription) {
      dispatch(getAISuggestions(jobDescription));
    }
  };

  return (
    <div>
      <h3>{resume.title}</h3>
      <div>
        <strong>Name:</strong> {resume.sections.personalInfo.name}
      </div>
      <div>
        <strong>Email:</strong> {resume.sections.personalInfo.email}
      </div>
      <div>
        <strong>Phone:</strong> {resume.sections.personalInfo.phone}
      </div>
      <div>
        <strong>Work Experience:</strong>
        <ul>
          {resume.sections.workExperience.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Education:</strong>
        <ul>
          {resume.sections.education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Skills:</strong>
        <ul>
          {resume.sections.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onGetSuggestions}>Get AI Suggestions</button>
    </div>
  );
};

export default ResumePreview;
