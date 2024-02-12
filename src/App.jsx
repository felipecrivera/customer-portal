import "./App.css";
import Dashboard from "./components/features/Dashboard/Dashboard";
import Signin from "./components/features/Signin/Signin";
import Signup from "./components/features/Signup/Signup";
import PrivateRoute from "./components/utils/PrivateRoute";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app flex h-full flex-col lg:flex-row">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
