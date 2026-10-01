import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("biohers_logged_in");
    navigate("/");
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          bio<span>HERS</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>

          <button className="login-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </nav>

      <main className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">YOUR BODY. YOUR CYCLE. YOUR SPACE.</p>

          <h1>
            Understand your body.
            <br />
            <span>Own your health.</span>
          </h1>

          <p className="hero-text">
            bioHERS is your personal women's health companion for
            understanding your cycle, tracking symptoms, and learning
            more about your wellbeing.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started ✦</button>
            <button className="secondary-btn">Explore bioHERS</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span>♡</span>
            <span>bioHERS</span>
          </div>

          <div className="cycle-circle">
            <div>
              <small>DAY</small>
              <strong>14</strong>
              <small>OF 28</small>
            </div>
          </div>

          <p className="cycle-status">You're in your</p>
          <h3>Ovulation Phase</h3>

          <div className="mini-stats">
            <div>
              <span>Next Period</span>
              <strong>14 days</strong>
            </div>

            <div>
              <span>Cycle</span>
              <strong>28 days</strong>
            </div>
          </div>
        </div>
      </main>

      <section className="features" id="features">
        <p className="eyebrow">MADE FOR HER</p>

        <h2>
          Everything you need to
          <br />
          <span>understand your body.</span>
        </h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">♡</div>
            <h3>Cycle Tracking</h3>
            <p>
              Track your periods, symptoms and cycle patterns
              in one place.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">✦</div>
            <h3>Health Insights</h3>
            <p>
              Learn about PCOS, PCOD, pregnancy and other
              women's health concerns.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">☼</div>
            <h3>Wellness</h3>
            <p>
              Discover nutrition, workouts and lifestyle
              suggestions tailored to your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;