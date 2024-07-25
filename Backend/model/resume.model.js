const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  sections: {
    personalInfo: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
    workExperience: [{ type: String }],
    education: [{ type: String }],
    skills: [{ type: String }],
  },
});

module.exports = mongoose.model('Resume', ResumeSchema);
