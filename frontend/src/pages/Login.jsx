


import { useState } from 'react'
import "../Login.css";

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({
      username,
      password
    })

    alert('Login submitted')
  }

  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Section */}
        <div className="login-info">

          <div className="brand">
            <div className="brand-icon">🏛️</div>

            <div>
              <h1>CivicFix</h1>
              <p>Grievance Redressal Portal</p>
            </div>
          </div>

          <div className="info-content">

            <h2>
              Make your city
              <span> better.</span>
            </h2>

            <p>
              Report civic issues, track complaints and
              help create a cleaner and smarter community.
            </p>

            <div className="features">

              <div className="feature">
                <span>📍</span>
                <div>
                  <strong>Report Issues</strong>
                  <small>Report problems in your area</small>
                </div>
              </div>

              <div className="feature">
                <span>🔎</span>
                <div>
                  <strong>Track Complaints</strong>
                  <small>Know the status of your complaint</small>
                </div>
              </div>

              <div className="feature">
                <span>🏙️</span>
                <div>
                  <strong>Improve Your City</strong>
                  <small>Work together for better communities</small>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* Right Section */}
        <div className="login-box">

          <div className="login-header">

            <div className="user-icon">
              👤
            </div>

            <h2>Welcome Back</h2>

            <p>
              Login to your CivicFix account
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>Username</label>

              <div className="input-wrapper">

                <span>👤</span>

                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(event) =>
                    setUsername(event.target.value)
                  }
                  required
                />

              </div>

            </div>


            <div className="input-group">

              <div className="password-label">

                <label>Password</label>

                <a href="#">
                  Forgot password?
                </a>

              </div>

              <div className="input-wrapper">

                <span>🔒</span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                />

              </div>

            </div>


            <button
              className="login-button"
              type="submit"
            >
              Login
              <span>→</span>
            </button>

          </form>


          <div className="divider">
            <span>OR</span>
          </div>


          <p className="register-text">

            Don't have an account?

            <a href="#">
              Create Account
            </a>

          </p>


          <p className="secure-text">
            🔒 Your information is securely protected
          </p>

        </div>

      </div>


      <footer>
        © 2026 CivicFix • Smart India Hackathon
      </footer>

    </div>
  )
}

export default Login