import './RainbowProgressBar.css';

export default function RainbowProgressBar({ visible }) {
  if (!visible) return null;

  return (
    <div className="rainbow-progress-bar">
      <div className="rainbow-progress-bar__track">
        <div className="rainbow-progress-bar__fill"></div>
      </div>
    </div>
  );
}
