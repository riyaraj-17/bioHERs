```css
.auth-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: linear-gradient(
    135deg,
    #f5faf7,
    #e7f4ed,
    #d9eee3
  );
}

.auth-card {
  width: 100%;
  max-width: 430px;
  background: rgba(255, 255, 255, 0.95);
  padding: 42px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(40, 90, 65, 0.15);
}

.auth-logo {
  text-align: center;
  margin-bottom: 30px;
}

.auth-logo h1 {
  margin: 0;
  font-size: 34px;
  font-weight: 700;
  color: #28634b;
  letter-spacing: 1px;
}

.auth-logo p {
  margin-top: 6px;
  font-size: 13px;
  color: #71847a;
}

.auth-heading {
  margin-bottom: 25px;
}

.auth-heading h2 {
  margin: 0 0 7px;
  color: #243c31;
  font-size: 25px;
}

.auth-heading p {
  margin: 0;
  color: #7a8982;
  font-size: 14px;
}

.input-group {
  margin-bottom: 18px;
}

.input-group label {
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
  font-weight: 600;
  color: #3e5148;
}

.input-wrapper {
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  border: 1px solid #d5e1db;
  border-radius: 12px;
  background: #fbfdfc;
  color: #71847a;
  transition: 0.2s;
}

.input-wrapper:focus-within {
  border-color: #4d8b6d;
  box-shadow: 0 0 0 3px rgba(77, 139, 109, 0.1);
}

.input-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #293b33;
}

.input-wrapper input::placeholder {
  color: #a4b0aa;
}

.password-toggle {
  border: none;
  background: transparent;
  color: #71847a;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.auth-button {
  width: 100%;
  height: 49px;
  margin-top: 8px;
  border: none;
  border-radius: 12px;
  background: #347658;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.auth-button:hover {
  background: #28634b;
  transform: translateY(-1px);
}

.auth-switch {
  margin-top: 22px;
  text-align: center;
  color: #718078;
  font-size: 14px;
}

.auth-switch a {
  color: #347658;
  font-weight: 600;
  text-decoration: none;
}

.auth-switch a:hover {
  text-decoration: underline;
}

.auth-error {
  margin: 8px 0;
  color: #c74a4a;
  font-size: 13px;
}

@media (max-width: 500px) {
  .auth-page {
    padding: 18px;
  }

  .auth-card {
    padding: 30px 22px;
  }
}
```
