import { useState } from "react";

import MainCard from "./components/MainCard";
import ThanksCard from "./components/ThanksCard";

function App() {
  // const inputRef = useRef(null)
  const [rated, setRated] = useState(false);
  const [rate, setRate] = useState(0);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRate(e.target.value);
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rate !== 0) setRated(true);
    if (rate === 0) setError("Please select a rate!");
  };
  return (
    <>
      <main className="App">
        <div className="App-header bg-very-dark-blue px-5">
          <div className="bg-dark-blue px-6 py-8 flex flex-col space-y-5 items-star shadow-xl rounded-3xl text-2xl max-w-[25rem]">
            {rated ? (
              <ThanksCard value={rate} />
            ) : (
              <MainCard
                selected={rate}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                error={error}
              />
            )}
          </div>
        </div>
      </main>
      <footer className="md:absolute right-0 bottom-0">
        <div className="attribution pt-10 md:pt-0 text-white">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/emerenini-cynthia-ngozi"
            target="_blank"
            rel="noreferrer"
          >
            Emerenini Cynthia Ngozi
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
