
const express = require("express");
const cors = require('cors')
const connectDB = require("./config/db");
require('dotenv').config()
const dns = require("dns");
const authRoutes = require("./route/authRouter");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const Complaint = require('./Complaint')

const app = express();

// Middleware
app.use(cors())
app.use(express.json())


app.use("/api/auth", authRoutes);


// Test route
app.get('/', (req, res) => {
  res.send('CivicFix Backend is Running!')
})
connectDB();

// Create complaint
app.post('/api/complaints', async (req, res) => {

  try {

    const {
      userId,
      title,
      category,
      description,
      location,
      latitude,
      longitude
    } = req.body

    console.log('New Complaint:')
    console.log('Title:', title)
    console.log('Category:', category)
    console.log('Description:', description)
    console.log('Location:', location)
    console.log('Latitude:', latitude)
    console.log('Longitude:', longitude)


    // Create complaint in MongoDB
    const complaint = new Complaint({
      userId,
      title,
      category,
      description,
      location,
      latitude,
      longitude
    })


    // Save to MongoDB
    const savedComplaint = await complaint.save()


    console.log('Complaint saved to MongoDB!')


    res.status(201).json({
      message: 'Complaint received and saved successfully',

      complaint: savedComplaint
    })

  } catch (error) {

    console.error('Error saving complaint:')
    console.error(error)

    res.status(500).json({
      message: 'Failed to save complaint',
      error: error.message
    })

  }

})


// Get all complaints
app.get('/api/complaints', async (req, res) => {

  try {

    const complaints = await Complaint.find()
      .sort({ createdAt: -1 })

    res.json(complaints)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: 'Failed to fetch complaints'
    })

  }

})
   const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })

// Get complaints of a specific user
app.get('/api/complaints/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params

    const complaints = await Complaint.find({ userId })
      .sort({ createdAt: -1 })

    res.json(complaints)

  } catch (error) {
    console.error('Error fetching user complaints:', error)

    res.status(500).json({
      message: 'Failed to fetch user complaints'
    })
  }
})
// MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {

//     console.log('MongoDB connected successfully!')

//     const PORT = process.env.PORT || 5000

//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`)
//     })

//   })
//   .catch((error) => {

//     console.error('MongoDB connection failed!')
//     console.error(error.message)

//   })

//----------------------------------------------------------------
// const dns = require("dns");

// dns.setServers(["8.8.8.8", "1.1.1.1"]);

// require("dotenv").config();

// const express = require("express");
// const connectDB = require("./config/db");

// const app = express();

// app.use(express.json());

// connectDB();

// app.get("/", (req, res) => {
//     res.send("CivicFix API is running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });