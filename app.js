const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const studentSchema = new mongoose.Schema({
  phone: String,
  password: String,
  age: Number,
  address: String,
  bio: String,
});

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);

 Student.create({
   phone: '01223860242',
  password:'karim.123',
  age: 25,
   address: 'bortsaid',
  bio: 'جاهز للتعلم',                     
});

Course.create({
   name: 'عربى',
   description: 'دورة عربى متقدمة',
 });

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`الخامد يعمل${PORT}`);
});
