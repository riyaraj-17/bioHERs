```jsx
import { useState } from "react"; // TEST
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import "../Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const savedUser = JSON.parse(localStorage.getItem("biohers_user"));

    if (!savedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (
      email !== savedUser.email ||
      password !== savedUser.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("biohers_logged_in", "true");

    navigate("/home");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          <h1>BioHERS</h1>
          <p>Healthcare. Empowered by You.</p>
        </div>

        <div className="auth-heading">
          <h2>Welcome back</h2>
          <p>Sign in to continue to BioHERS</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>

            <div className="input-wrapper">
              <Mail size={19} />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <Lock size={19} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/signup">Sign up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
```
export default Login;