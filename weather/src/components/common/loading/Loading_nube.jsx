import './Loading_nube.css';

function Loading_nube() {
  return (
    <div className="loader-container">
      <div className="loader-cloud loader-front">
        <span className="loader-left-front"></span>
        <span className="loader-right-front"></span>
      </div>
      <span className="loader-sun loader-sunshine"></span>
      <span className="loader-sun"></span>
      <div className="loader-cloud loader-back">
        <span className="loader-left-back"></span>
        <span className="loader-right-back"></span>
      </div>
    </div>

  );
}

export default Loading_nube;
