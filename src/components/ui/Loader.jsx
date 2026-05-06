
export default function Loader({ size = 'md', fullScreen = false }) {
  return (
    <div className={`loader-wrapper ${fullScreen ? 'full-screen' : ''}`}>
      <div className={`loader loader-${size}`}>
        <div className="loader-spinner"></div>
      </div>
    </div>
  );
}
