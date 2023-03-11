import React from "react";
import { Redirect } from "react-router-dom";

//Pages
import PagesMaintenance from "../pages/Utility/pages-maintenance";
import PagesComingsoon from "../pages/Utility/pages-comingsoon";

import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import Recoverpw from "../pages/AuthenticationInner/Recoverpw";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";

// Profile
import UserProfile from "../pages/Authentication/user-profile";
import Report from "../pages/Report";
import Tracking from "../pages/Tracking";
import Admin from "../pages/User";
import Vehicals from "../pages/Vehicals";
import Trip from "../pages/Trip";
import Plants from "../pages/Plants";
import Clients from "../pages/User/client";
import Driver from "../pages/User/driver";
import Transporter from "../pages/User/transporter";
import ClientInfo from "../pages/User/client/ClientInfo";
import TransporterInfo from "../pages/User/transporter/transpoterInfo";
import DriverInfo from "../pages/User/driver/DriverInfo";
import VehiclesInfo from "../pages/Vehicals/VehiclesInfo";
import BillForm from "../pages/BillForm";
import DownloadBill from "../pages/BillForm/DownloadBill";

const userRoutes = [
  // Analytics
  { path: "/", component: Report },
  { path: "/tracking/:tripId", component: Tracking },
  { path: "/tracking", component: Tracking },
  { path: "/invoice", component: DownloadBill },

  // User
  { path: "/admins", component: Admin },
  { path: "/clients", component: Clients },
  {
    path: "/clientInfo/:clientId",
    component: (props) => <ClientInfo {...props} />,
  },
  { path: "/drivers", component: Driver },
  {
    path: "/driversInfo/:driversId",
    component: (props) => <DriverInfo {...props} />,
  },
  { path: "/transporter", component: Transporter },
  {
    path: "/transposerInfo/:transposerId",
    component: (props) => <TransporterInfo {...props} />,
  },
  // Vehical
  { path: "/vehicles", component: Vehicals },
  { path: "/vehiclesInfo/:vehiclesId", component: VehiclesInfo },

  // Trip
  { path: "/trip", component: Trip },

  // Plant
  { path: "/sites", component: Plants },

  // profile
  { path: "/profile", component: UserProfile },

  // { path: "/", exact: true, component: () => <Redirect to="/login" /> },
  { path: "/*", exact: true, component: Pages404 },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },

  // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-register", component: Register1 },
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/auth-lock-screen", component: LockScreen },
];

export { userRoutes, authRoutes };
