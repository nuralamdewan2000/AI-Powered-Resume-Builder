import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResumes } from '../actions/resumeActions';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';

const Dashboard = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resume.resumes);

  useEffect(() => {
    dispatch(getResumes());
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ResumeForm />
      <div>
        {resumes.map((resume) => (
          <ResumePreview key={resume._id} resume={resume} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
