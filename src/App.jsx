
import { useState } from "react"
import "./App.css"

import flower from "./assets/blossom-flower.svg"
import googleLogo from "./assets/icons-google-logo.svg"
import appleLogo from "./assets/icons-apple-logo.svg"

function AuthForm({ isLogin }) {
  const [remember, setRemember] = useState(false)

  return (
    <section className="auth-card">
      <div className="auth-form">
        <h1>{isLogin ? "Welcome back!" : "Create an account"}</h1>
        <p className="subtitle">
          {isLogin
            ? "Please enter your details to log in."
            : "Please fill in your details to sign up."}
        </p>

        {!isLogin && (
          <label>
            Full name
            <input type="text" placeholder="Enter your full name" />
          </label>
        )}

        <label>
          Email address
          <input type="email" placeholder="Enter your email" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>

        {isLogin ? (
          <div className="form-options">
            <label className="check-label">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#forgot-password">Forgot password?</a>
          </div>
        ) : (
          <label className="check-label terms">
            <input type="checkbox" />
            I agree to the Terms and Conditions
          </label>
        )}

        <button className="primary-button">
          {isLogin ? "Log in" : "Sign up"}
        </button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <button className="social-button">
          <img src={googleLogo} alt="" />
          Continue with Google
        </button>

        <button className="social-button">
          <img src={appleLogo} alt="" />
          Continue with Apple
        </button>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <a href={isLogin ? "#signup" : "#login"}>
            {isLogin ? "Sign up" : "Log in"}
          </a>
        </p>
      </div>

      <div className="flower-panel">
        <img src={flower} alt="Decorative blossom flower" />
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="page">
      <AuthForm isLogin={false} />
      <AuthForm isLogin={true} />
    </main>
  )
}

export default App
