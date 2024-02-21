import { Outlet, Navigate } from "react-router-dom";
const Dashboard = () => {
  const customer = JSON.parse(localStorage.getItem("customer"));

  if (customer.dashboardDisplay === "Both") {
    return <Navigate to="/bookings" />;
  } else if (customer.dashboardDisplay === "Booking") {
    return <Navigate to="/bookings" />;
  } else {
    return <Navigate to="/activations" />;
  }
};

export default Dashboard;
