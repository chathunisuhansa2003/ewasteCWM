import './Loader.css';

function Loader({ fullScreen = false }) {
  return (
    <div className={`loader${fullScreen ? ' loader--fullscreen' : ''}`}>
      <div className="loader__spinner" />
      <span className="loader__text">Loading...</span>
    </div>
  );
}

export default Loader;
