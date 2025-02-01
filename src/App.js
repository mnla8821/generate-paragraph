import { useState } from "react";
import "./App.css";
import paragraps from "./list";

function App() {
  const [val, setVal] = useState(1);
  const [currenVal, setCurrentVal] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentVal(val);
  };
  return (
    <div className="App">
      <div className="container-fluid home ">
        <div className="row generate">
          <h1>tired of boring lorem ipsum?</h1>
          <form className="form" onSubmit={handleSubmit}>
            <h2>Paragraphs:</h2>
            <input
              type="number"
              min={1}
              max={8}
              onChange={(e) => setVal(e.target.value)}
              value={val}
            />
            <button className="btn">Generate</button>
          </form>
          <div className="para">
            {paragraps.map(
              (item) =>
                item.id <= currenVal && (
                  <div className="one-para" key={item.id}>
                    {item.text}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
