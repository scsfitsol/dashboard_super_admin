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
import Traking from "../pages/Traking";
import Admin from "../pages/User";
import Clients from "../pages/User/clients";
import Driver from "../pages/User/driver";
import Vehicals from "../pages/Vehicals";
import Trip from "../pages/Trip";
import Plants from "../pages/Plants";
import Transporter from "../pages/User/transporter";

const userRoutes = [
  // Analytics
  { path: "/Dashboard", component: Report },
  { path: "/traking", component: Traking },

  // User
  { path: "/admins", component: Admin },
  { path: "/clients", component: Clients },
  { path: "/drivers", component: Driver },
  { path: "/drivers", component: Driver },
  { path: "/transporter", component: Transporter },
  // Vehical
  { path: "/vehicles", component: Vehicals },

  // Trip
  { path: "/trip", component: Trip },

  // Plant
  { path: "/sites", component: Plants },

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
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
