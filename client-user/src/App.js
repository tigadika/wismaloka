import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import PriceSearch from "./views/PriceSearch";
import LocationSearch from "./views/LocationSearch";
import ListingsPage from "./views/ListingsPage";
import DetailPage from "./views/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="" element={<PriceSearch />}></Route>
          <Route path="maps" element={<LocationSearch />}></Route>
        </Route>
        <Route path="/all" element={<ListingsPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
