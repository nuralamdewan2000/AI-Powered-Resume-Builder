const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connection = require('./config/db')

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/resumes', require('./routes/resumeRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

app.get('/',(req,res) =>{
    res.status(200).send({msg:"welcome to the AI Powered Resume Builder"})
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, async() =>{
    try{
        console.log(`Server running on http://localhost:${PORT}`);
        await connection;
        console.log('connected to database')


    }catch(err){
        console.log(err);
    }
})
