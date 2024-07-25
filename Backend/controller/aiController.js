const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);

exports.getAISuggestions = async (req, res) => {
  const { jobDescription } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Given the following job description, provide suggestions to improve a resume:

Job Description:
${jobDescription}

Please provide specific suggestions to tailor a resume for this job description. Focus on:
1. Skills to highlight
2. Experiences to emphasize
3. Achievements to showcase
4. Keywords to include
5. Sections to add or modify`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ suggestions: text.trim() });
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    res.status(500).json({ message: 'Failed to get AI suggestions: ' + error.message });
  }
};
