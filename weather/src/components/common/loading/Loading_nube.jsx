import './Loading_nube.css';

function Loading_nube() {
  return (
    <div class="loader-container">
      <div class="loader-cloud loader-front">
        <span class="loader-left-front"></span>
        <span class="loader-right-front"></span>
      </div>
      <span class="loader-sun loader-sunshine"></span>
      <span class="loader-sun"></span>
      <div class="loader-cloud loader-back">
        <span class="loader-left-back"></span>
        <span class="loader-right-back"></span>
      </div>
    </div>

  );
}

export default Loading_nube;
