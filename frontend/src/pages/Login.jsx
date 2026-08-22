import { useState } from 'react'
import "../Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: username,
            password: password
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        alert(data.message || "Login failed")
        return
      }

      console.log("Login successful:", data)

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      )

      alert("Login successful!")

      // You can redirect after login
      // window.location.href = "/dashboard"
      navigate("/dashboard") // Use this if you are using react-router-dom

    } catch (error) {

      console.error("Login error:", error)

      alert(
        "Unable to connect to server. Make sure backend is running."
      )

    } finally {
      setLoading(false)
    }
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

              <label>Email</label>

              <div className="input-wrapper">

                <span>👤</span>

                <input
                  type="email"
                  placeholder="Enter your email"
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
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
              {!loading && <span>→</span>}
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <p className="register-text">

            Don't have an account?

            <a href="/register">
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