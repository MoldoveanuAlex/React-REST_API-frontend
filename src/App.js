import "./App.css";
import ButtonAppBar from "./components/Appbar";
import ComerciantRead from "./components/ComerciantRead";
import ComerciantAdd from "./components/ComerciantAdd";
import ComerciantDelete from "./components/ComerciantDelete";
import ComerciantModify from "./components/ComercinatModify"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <ButtonAppBar></ButtonAppBar>
    //   <ComerciantRead></ComerciantRead>
    // </div>

    <Router>
      <ButtonAppBar></ButtonAppBar>
      {/* <ComerciantRead></ComerciantRead> */}
      <Routes>
        <Route path="/adauga" element={<ComerciantAdd></ComerciantAdd>}></Route>
        <Route path="/vizualizeaza" element={<ComerciantRead></ComerciantRead>}></Route>
        <Route path="/sterge" element={<ComerciantDelete></ComerciantDelete>}></Route>
        <Route path="/modifica" element={<ComerciantModify></ComerciantModify>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
