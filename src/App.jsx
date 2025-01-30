import { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; 
    setRandomNumber(number);  
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-400">
      <div className="text-center bg-white text-black p-5 rounded ">
        <h1 className="text-4xl mb-4">Random Number Generator</h1>

        <p className="text-2xl mb-4">
          {randomNumber !== null ? `Random Number: ${randomNumber}` : "Click the button to generate a random number"}
        </p>

        <button
          className="p-3 bg-purple-600 text-white rounded"
          onClick={generateRandomNumber}
        >
          Generate Random Number
        </button>
      </div>
    </div>
  );
}

export default App;
