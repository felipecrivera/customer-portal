import "./App.css";
import { useEffect } from "react";
import Dashboard from "./components/features/Dashboard/Dashboard";
import Signin from "./components/features/Signin/Signin";
import Report from "./components/features/Report/Report";
import Signup from "./components/features/Signup/Signup";
import PrivateRoute from "./components/utils/PrivateRoute";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "preline/preline";
import Booking from "./components/features/Dashboard/Booking";
import Activation from "./components/features/Dashboard/Activation";
import SignupUser from "./components/features/Signup/SIgnupUser";

function App() {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="app flex h-full flex-col lg:flex-row">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin-user" element={<SignupUser />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/report" element={<Report />} />
            <Route path="/activations" element={<Activation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
