import { useState } from 'react'
import './App.css'
import Map from './Map'
import { useNavigate } from 'react-router-dom'

function App() {
const [position, setPosition] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: ''
  })
  const navigate = useNavigate()

  const [showForm, setShowForm] = useState(true)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = async (event) => {
  event.preventDefault()

  const user = JSON.parse(localStorage.getItem('user'))

if (!user) {
alert('Please login before submitting a complaint.')
return
}
  try {
  const response = await fetch(
      'http://localhost:5000/api/complaints',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
           userId: user.id,
          ...formData,
          latitude: position ? position[0] : null,
          longitude: position ? position[1] : null
        })
      }
    )

    const data = await response.json()

    console.log(data)

    alert('Complaint submitted successfully!')

    setFormData({
      title: '',
      category: '',
      description: '',
      location: ''
    })

    setPosition(null)

  } catch (error) {

    console.error(error)

    alert('Something went wrong!')

  }
}

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">

        <div className="logo">
          🏛️
          <div>
            <h2>CivicFix</h2>
            <span>Smart Citizen Portal</span>
          </div>
        </div>

        <nav>

          <a href="#home">Home</a>

          <a
            href="#report"
            onClick={() => setShowForm(true)}
          >
            Report Issue
          </a>

          <a href="#track">
            Track Status
          </a>

          <a href="#updates">
            Updates
          </a>

          <button
          onClick={() => navigate('/login')} 
          className="login-btn">
            Login
          </button>
          <button
          onClick={() => navigate('/signup')} 
          className="login-btn">
            Signup
          </button>

        </nav>

      </header>


      {/* PAGE TITLE */}

      <section className="page-title">

        <h1>Report & Resolve Issues</h1>

        <p>
          Help make your community cleaner, safer and smarter.
        </p>

      </section>


      {/* MAIN AREA */}

      <main className="main-area">

        {/* MAP */}
<div className="map">

  <Map
    position={position}
    setPosition={setPosition}
  />

</div>

{position && (
  <button
    className="clear-location"
    onClick={() => setPosition(null)}
  >
    ✕ Clear Location
  </button>
)}


        {/* LEFT COMPLAINT FORM */}

        {showForm && (

          <div className="complaint-card">

            <div className="card-header">
              <h2>LODGE YOUR COMPLAINT</h2>
            </div>

            <form onSubmit={handleSubmit}>

              <label>
                Issue Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter issue title"
                value={formData.title}
                onChange={handleChange}
                required
              />


              <label>
                Grievance Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Category
                </option>

                <option value="road">
                  Roads / Potholes
                </option>

                <option value="electricity">
                  Electricity
                </option>

                <option value="water">
                  Water Supply
                </option>

                <option value="garbage">
                  Sanitation / Garbage
                </option>

                <option value="public-works">
                  Public Works
                </option>

              </select>


              <label>
                Describe Problem
              </label>

              <textarea
                name="description"
                placeholder="Describe the problem..."
                value={formData.description}
                onChange={handleChange}
                required
              />


              <label>
                Location / Address
              </label>

              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleChange}
                required
              />


              <button
                type="submit"
                className="submit-btn"
              >
                SUBMIT GRIEVANCE
              </button>

            </form>

          </div>

        )}


        {/* RIGHT SIDE */}

        <div className="right-panel">

          {/* RECENT UPDATES */}

          <div
            className="side-card"
            id="updates"
          >

            <div className="side-title">
              RECENT UPDATES
            </div>

            <div className="update">
              <span className="red">●</span>

              <div>
                <strong>Road repair</strong>
                <p>3 complaints reported</p>
              </div>
            </div>

            <div className="update">
              <span className="yellow">●</span>

              <div>
                <strong>Street light issue</strong>
                <p>Under investigation</p>
              </div>
            </div>

            <div className="update">
              <span className="green">●</span>

              <div>
                <strong>Water supply</strong>
                <p>Resolved</p>
              </div>
            </div>

          </div>


          {/* TRACK COMPLAINT */}

          <div
            className="side-card"
            id="track"
          >

            <div className="side-title">
              TRACK COMPLAINT
            </div>

            <div className="search-box">

              <input
                type="text"
                placeholder="Enter complaint ID"
              />

              <button>
                🔍
              </button>

            </div>

          </div>


          {/* STATISTICS */}

          <div className="stats-card">

            <div>
              <strong>1,250</strong>
              <span>Reported</span>
            </div>

            <div>
              <strong>850</strong>
              <span>Resolved</span>
            </div>

            <div>
              <strong>320</strong>
              <span>In Progress</span>
            </div>

          </div>

        </div>

      </main>
 

      {/* FOOTER */}

      <footer>

        <strong>CivicFix</strong>

        <span>
          Building smarter and cleaner communities together.
        </span>

        <span>
          © 2026 CivicFix
        </span>

      </footer>

    </div>
  )
}

export default App