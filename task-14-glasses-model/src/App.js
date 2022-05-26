import "./App.css";
import Header from "./components/header";
import Model from "./components/model";
import Glasses from "./components/glasses";
import data from "./data/dataGlasses.json";

function App() {
  const glasses = data;
  return (
    <div className="app container-fluid px-0 d-flex flex-column overlay">
      <Header />
      <div className="container mt-5 p-5">
        <Model />
        <Glasses glassesProp={glasses} />
      </div>
    </div>
  );
}

export default App;
