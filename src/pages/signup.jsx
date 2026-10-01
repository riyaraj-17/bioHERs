```jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import "../Auth.css";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUser = localStorage.getItem("biohers_user");

    if (existingUser) {
      const user = JSON.parse(existingUser);

      if (user.email === email) {
        setError("An account with this email already exists.");
        return;
      }
    }

    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "biohers_user",
      JSON.stringify(newUser)
    );

    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          <h1>BioHERS</h1>
          <p>Healthcare. Empowered by You.</p>
        </div>

        <div className="auth-heading">
          <h2>Create your account</h2>
          <p>Join BioHERS and take control of your health</p>
        </div>

        <form onSubmit={handleSignUp}>

          <div className="input-group">
            <label>Full Name</label>

            <div className="input-wrapper">
              <User size={19} />

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

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
                placeholder="Create a password"
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

          <div className="input-group">
            <label>Confirm Password</label>

            <div className="input-wrapper">
              <Lock size={19} />

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
              />
            </div>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-button">
            Create Account
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default SignUp;
```
export default SignUp;