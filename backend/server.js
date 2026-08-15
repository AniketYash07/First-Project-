const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const Complaint = require('./models/Complaint')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())


// Test route
app.get('/', (req, res) => {
  res.send('CivicFix Backend is Running!')
})


// Create complaint
app.post('/api/complaints', async (req, res) => {

  try {

    const {
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


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log('MongoDB connected successfully!')

    const PORT = process.env.PORT || 5000

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })

  })
  .catch((error) => {

    console.error('MongoDB connection failed!')
    console.error(error.message)

  })