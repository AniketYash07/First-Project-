import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.name || "Citizen";
  const email = user?.email || "citizen@example.com";

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="civic-dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="civic-sidebar">

        {/* Logo */}
        <div className="civic-logo">
          <div className="logo-box">
            C
          </div>

          <div>
            <h2>CivicFix</h2>
            <span>Citizen Portal</span>
          </div>
        </div>


        {/* Navigation */}
        <div className="nav-section">

          <p className="nav-label">
            OVERVIEW
          </p>

          <button className="nav-link active">
            <span className="nav-icon">⌂</span>
            Dashboard
          </button>

          <button
            className="nav-link"
            onClick={() => navigate("/complaints")}
          >
            <span className="nav-icon">▤</span>
            My Complaints
          </button>

          <button
            className="nav-link"
            onClick={() => navigate("/track")}
          >
            <span className="nav-icon">◉</span>
            Track Complaint
          </button>

          <p className="nav-label second">
            SERVICES
          </p>

          <button
            className="nav-link"
            onClick={() => navigate("/complaint")}
          >
            <span className="nav-icon">＋</span>
            Report an Issue
          </button>

          <button className="nav-link">
            <span className="nav-icon">♡</span>
            Saved Issues
          </button>

        </div>


        {/* Help Card */}
        <div className="help-card">

          <div className="help-icon">
            ?
          </div>

          <div>
            <strong>Need help?</strong>
            <p>We're here to help you.</p>

            <button>
              Contact Support →
            </button>
          </div>

        </div>


        {/* Bottom user */}
        <div className="sidebar-bottom">

          <div className="sidebar-profile">

            <div className="profile-avatar">
              {name.charAt(0).toUpperCase()}
            </div>

            <div className="profile-details">
              <strong>{name}</strong>
              <span>{email}</span>
            </div>

            <button
              className="profile-menu"
              onClick={logout}
            >
              ⋮
            </button>

          </div>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="civic-main">

        {/* Header */}

        <header className="civic-header">

          <div className="header-left">

            <div className="breadcrumb">
              Home <span>/</span> Dashboard
            </div>

            <h1>Dashboard</h1>

          </div>


          <div className="header-right">

            <button className="search-button">
              <span>⌕</span>
              Search
              <kbd>⌘ K</kbd>
            </button>

            <button className="notification-button">
              ♢
              <i></i>
            </button>

            <div className="header-avatar">
              {name.charAt(0).toUpperCase()}
            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}

        <div className="dashboard-content">


          {/* Welcome */}

          <section className="welcome-section">

            <div>

              <div className="welcome-tag">
                CITIZEN DASHBOARD
              </div>

              <h2>
                Good morning, {name.split(" ")[0]}!
                <span> 👋</span>
              </h2>

              <p>
                Here's an overview of your civic complaints and activity.
              </p>

            </div>


            <button
              className="report-button"
              onClick={() => navigate("/complaint")}
            >
              <span>＋</span>
              Report an Issue
            </button>

          </section>


          {/* ================= STATISTICS ================= */}

          <section className="statistics-grid">


            <div className="stat-box">

              <div className="stat-top">
                <span>Total Complaints</span>

                <div className="stat-symbol blue-symbol">
                  #
                </div>
              </div>

              <div className="stat-number">
                12
              </div>

              <div className="stat-footer">
                <span className="trend positive">
                  ↑ 12%
                </span>

                <span>
                  from last month
                </span>
              </div>

            </div>


            <div className="stat-box">

              <div className="stat-top">
                <span>Pending</span>

                <div className="stat-symbol orange-symbol">
                  ◷
                </div>
              </div>

              <div className="stat-number">
                04
              </div>

              <div className="stat-footer">
                <span className="trend orange">
                  Awaiting
                </span>

                <span>
                  action
                </span>
              </div>

            </div>


            <div className="stat-box">

              <div className="stat-top">
                <span>In Progress</span>

                <div className="stat-symbol purple-symbol">
                  ↻
                </div>
              </div>

              <div className="stat-number">
                03
              </div>

              <div className="stat-footer">
                <span className="trend purple">
                  Active
                </span>

                <span>
                  resolution
                </span>
              </div>

            </div>


            <div className="stat-box">

              <div className="stat-top">
                <span>Resolved</span>

                <div className="stat-symbol green-symbol">
                  ✓
                </div>
              </div>

              <div className="stat-number">
                05
              </div>

              <div className="stat-footer">
                <span className="trend positive">
                  ↑ 8%
                </span>

                <span>
                  successfully resolved
                </span>
              </div>

            </div>


          </section>


          {/* ================= ANALYTICS ================= */}

          <section className="analytics-grid">


            {/* Activity */}

            <div className="dashboard-card activity-card">

              <div className="card-heading">

                <div>
                  <h3>Complaint Activity</h3>
                  <p>Number of complaints submitted over time</p>
                </div>

                <select>
                  <option>Last 6 months</option>
                  <option>Last 30 days</option>
                  <option>This year</option>
                </select>

              </div>


              <div className="graph">

                <div className="graph-values">
                  <span>20</span>
                  <span>15</span>
                  <span>10</span>
                  <span>5</span>
                  <span>0</span>
                </div>


                <div className="graph-main">

                  <div className="graph-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>


                  <svg
                    viewBox="0 0 700 240"
                    preserveAspectRatio="none"
                    className="activity-svg"
                  >

                    <defs>

                      <linearGradient
                        id="blueArea"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#247cff"
                          stopOpacity="0.25"
                        />

                        <stop
                          offset="100%"
                          stopColor="#247cff"
                          stopOpacity="0"
                        />

                      </linearGradient>

                    </defs>


                    <path
                      d="
                        M0 190
                        L115 145
                        L230 165
                        L345 85
                        L460 120
                        L575 55
                        L700 95
                        L700 240
                        L0 240
                        Z
                      "
                      fill="url(#blueArea)"
                    />


                    <path
                      d="
                        M0 190
                        L115 145
                        L230 165
                        L345 85
                        L460 120
                        L575 55
                        L700 95
                      "
                      fill="none"
                      stroke="#247cff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />


                    <circle
                      cx="575"
                      cy="55"
                      r="6"
                      fill="#ffffff"
                      stroke="#247cff"
                      strokeWidth="4"
                    />

                  </svg>


                  <div className="graph-months">
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                  </div>

                </div>

              </div>

            </div>


            {/* Status */}

            <div className="dashboard-card status-card">

              <div className="card-heading">

                <div>
                  <h3>Complaint Status</h3>
                  <p>Current complaint distribution</p>
                </div>

              </div>


              <div className="status-chart">

                <div className="progress-ring">

                  <div className="progress-inner">

                    <strong>42%</strong>

                    <span>Resolved</span>

                  </div>

                </div>

              </div>


              <div className="status-items">

                <div className="status-item">

                  <span>
                    <i className="dot pending-dot"></i>
                    Pending
                  </span>

                  <strong>33%</strong>

                </div>


                <div className="status-item">

                  <span>
                    <i className="dot progress-dot"></i>
                    In Progress
                  </span>

                  <strong>25%</strong>

                </div>


                <div className="status-item">

                  <span>
                    <i className="dot resolved-dot"></i>
                    Resolved
                  </span>

                  <strong>42%</strong>

                </div>

              </div>

            </div>


          </section>


          {/* ================= RECENT COMPLAINTS ================= */}

          <section className="dashboard-card complaints-card">

            <div className="card-heading">

              <div>
                <h3>Recent Complaints</h3>
                <p>Your latest reported civic issues</p>
              </div>

              <button
                className="view-button"
                onClick={() => navigate("/complaints")}
              >
                View all →
              </button>

            </div>


            <div className="complaints-table">

              <div className="table-head">

                <span>ISSUE</span>
                <span>COMPLAINT ID</span>
                <span>DATE</span>
                <span>STATUS</span>
                <span></span>

              </div>


              {/* Row 1 */}

              <div className="complaint-row">

                <div className="issue-info">

                  <div className="issue-image blue-issue">
                    💡
                  </div>

                  <div>
                    <strong>Street Light Not Working</strong>
                    <span>Public Lighting</span>
                  </div>

                </div>

                <span>#CF1024</span>

                <span>15 Aug 2026</span>

                <span className="badge pending-badge">
                  Pending
                </span>

                <button className="row-more">
                  ⋮
                </button>

              </div>


              {/* Row 2 */}

              <div className="complaint-row">

                <div className="issue-info">

                  <div className="issue-image purple-issue">
                    ◈
                  </div>

                  <div>
                    <strong>Road Damage</strong>
                    <span>Road & Transport</span>
                  </div>

                </div>

                <span>#CF1023</span>

                <span>13 Aug 2026</span>

                <span className="badge progress-badge">
                  In Progress
                </span>

                <button className="row-more">
                  ⋮
                </button>

              </div>


              {/* Row 3 */}

              <div className="complaint-row">

                <div className="issue-info">

                  <div className="issue-image green-issue">
                    ♻
                  </div>

                  <div>
                    <strong>Garbage Collection</strong>
                    <span>Waste Management</span>
                  </div>

                </div>

                <span>#CF1022</span>

                <span>10 Aug 2026</span>

                <span className="badge resolved-badge">
                  Resolved
                </span>

                <button className="row-more">
                  ⋮
                </button>

              </div>


            </div>

          </section>


          {/* Footer */}

          <footer className="dashboard-footer">
            <span>© 2026 CivicFix</span>
            <span>•</span>
            <span>Making communities better together</span>
          </footer>


        </div>

      </main>

    </div>
  );
}

export default Dashboard;