const Resume = require('../model/resume.model');

exports.createResume = async (req, res) => {
  const { title, sections } = req.body;
  try {
    const resume = new Resume({
      user: req.user.id,
      title,
      sections,
    });
    await resume.save();
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateResume = async (req, res) => {
  const { title, sections } = req.body;
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });

    resume.title = title;
    resume.sections = sections;
    await resume.save();
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });

    await resume.remove();
    res.json({ message: 'Resume removed' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
