import { useEffect, useState } from "react";
import "./App.css";
import Progressbar from "./components/Progressbar";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <Progressbar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Completed" : "loading..."}</span>
    </div>
  );
}

export default App;
