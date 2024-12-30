import "./App.css";
import Dropdown1 from "./components/Dropdown1.ts";
import AutoSelect2 from "./AutoSelect2.js";
import counties from "./assets/counties.ts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div sx={{ text: "black" }}>stuff</div>
        <div>mystuff</div>
        {/* <Dropdown1 /> */}
        <AutoSelect2 options={counties} label="County" />
        {/* <Autocomplete
          disablePortal
          options={counties}
          sx={{ width: 300 }}
          //   renderInput={(params) => <TextField {...params} label="County" />}
        /> */}
      </header>
    </div>
  );
}

export default App;
