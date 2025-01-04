import './App.css';
import axios from 'axios';

function App() {
  function shortenText() {
    let textToShorten = document.getElementById('textToShorten').value;
    axios.post('http://localhost:3000/shortenText', { text: textToShorten })
      .then((response) => {
        document.getElementById('shortenedText').value = response.data.shortenedText;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <h3>Enter text to shorten:</h3>
      <textarea id="textToShorten"></textarea>
      <button id="shortenBtn" onClick={shortenText}>Shorten</button>
      <br />
      <br />
      <h3>Shortened text:</h3>
      <textarea id="shortenedText" readOnly></textarea>
    </>
  );
}

export default App;
