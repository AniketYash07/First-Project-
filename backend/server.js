const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('CivicFix Backend is Running!')
})
app.post('/api/complaints', (req, res) => {

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

  res.json({
    message: 'Complaint received successfully',
    complaint: {
      title,
      category,
      description,
      location,
      latitude,
      longitude
    }
  })

})
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})