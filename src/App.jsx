import { useState, useCallback } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import SplashScreen from './pages/SplashScreen';
import LoginPage from './pages/LoginPage';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashFinish = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <AuthProvider>
      {!splashDone && <SplashScreen onFinish={handleSplashFinish} />}
      {splashDone && <LoginPage />}
    </AuthProvider>
  );
}
