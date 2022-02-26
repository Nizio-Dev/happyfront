import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/Dashboard";
import LoginPage from "./components/pages/LoginPage";
import RegistrationPage from "./components/pages/RegistrationPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
          <Route path="/user/*" element={<DashboardPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;