import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import PriceSearch from "./views/PriceSearch";
import LocationSearch from "./views/LocationSearch";
import ListingsPage from "./views/ListingsPage";
import DetailPage from "./views/DetailPage";
import AgentDashboard from "./views/AgentDashboard";
import AgentAssets from "./views/AgentAssets";
import AgentAdd from "./views/AgentAdd";
import AgentLogin from "./views/AgentLogin";
import PaymentSucces from "./views/PaymentSucces";

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
        <Route path="/agent" element={<AgentDashboard />}>
          <Route path="" element={<AgentAssets />}></Route>
          <Route path="add" element={<AgentAdd />}></Route>
        </Route>
        <Route path="/agent/login" element={<AgentLogin />}></Route>
        <Route path="/payment-sukses" element={<PaymentSucces />}></Route>
      </Routes>
    </div>
  );
}

export default App;
