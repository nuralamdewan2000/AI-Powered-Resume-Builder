import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResume, updateResume } from '../actions/resumeActions';

const ResumeForm = ({ edit = false, currentResume = null }) => {
  const [title, setTitle] = useState(edit ? currentResume.title : '');
  const [personalInfo, setPersonalInfo] = useState(
    edit ? currentResume.sections.personalInfo : { name: '', email: '', phone: '' }
  );
  const [workExperience, setWorkExperience] = useState(
    edit ? currentResume.sections.workExperience : ['']
  );
  const [education, setEducation] = useState(
    edit ? currentResume.sections.education : ['']
  );
  const [skills, setSkills] = useState(edit ? currentResume.sections.skills : ['']);

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const onWorkExperienceChange = (e, index) => {
    const newWorkExperience = workExperience.map((item, i) =>
      i === index ? e.target.value : item
    );
    setWorkExperience(newWorkExperience);
  };

  const onEducationChange = (e, index) => {
    const newEducation = education.map((item, i) =>
      i === index ? e.target.value : item
    );
    setEducation(newEducation);
  };

  const onSkillsChange = (e, index) => {
    const newSkills = skills.map((item, i) =>
      i === index ? e.target.value : item
    );
    setSkills(newSkills);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      sections: {
        personalInfo,
        workExperience,
        education,
        skills,
      },
    };

    if (edit) {
      dispatch(updateResume(currentResume._id, formData));
    } else {
      dispatch(addResume(formData));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={personalInfo.name}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={personalInfo.phone}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Work Experience</label>
        {workExperience.map((exp, index) => (
          <input
            key={index}
            type="text"
            value={exp}
            onChange={(e) => onWorkExperienceChange(e, index)}
          />
        ))}
        <button
          type="button"
          onClick={() => setWorkExperience([...workExperience, ''])}
        >
          Add Work Experience
        </button>
      </div>
      <div>
        <label>Education</label>
        {education.map((edu, index) => (
          <input
            key={index}
            type="text"
            value={edu}
            onChange={(e) => onEducationChange(e, index)}
          />
        ))}
        <button type="button" onClick={() => setEducation([...education, ''])}>
          Add Education
        </button>
      </div>
      <div>
        <label>Skills</label>
        {skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            value={skill}
            onChange={(e) => onSkillsChange(e, index)}
          />
        ))}
        <button type="button" onClick={() => setSkills([...skills, ''])}>
          Add Skill
        </button>
      </div>
      <button type="submit">{edit ? 'Update Resume' : 'Create Resume'}</button>
    </form>
  );
};

export default ResumeForm;
