import { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const finishTimer = setTimeout(() => onFinish(), 2300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash ${fadeOut ? 'splash--fade-out' : ''}`}>
      <div className="splash__center">
        <img
          src="/instagram-logo.png"
          alt="Instagram"
          className="splash__logo"
        />
      </div>

      <div className="splash__footer">
        <p className="splash__from">from</p>
        <p className="splash__meta-text">Meta</p>
      </div>
    </div>
  );
}
