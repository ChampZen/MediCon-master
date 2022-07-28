import Dashboard from "./views/Dashboard";
import UserProfile from "./views/UserProfile.jsx";
import TableList from "./views/TableList.jsx";
import Typography from "./views/Typography.jsx";
import Maps from "./views/Maps.jsx";
import Notifications from "./views/Notifications.jsx";
import AddUser from "./views/AddUser"
import AddHospital from "./views/AddHospital"
import AddUserData from "./views/AddUserData"

const dashboardRoutes = [
  
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Visit History",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/add-user",
    name: "Add User",
    icon: "pe-7s-users",
    component: AddUser,
    layout: "/admin"
  },

  {
    path: "/add-hospital",
    name: "Add Hospital",
    icon: "pe-7s-shield",
    component: AddHospital,
    layout: "/admin"
  },
  {
    path: "/medical-data-add",
    name: "Medical Data",
    icon: "pe-7s-diamond",
    component: AddUserData,
    layout: "/admin"
  },{
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  }
];

export default dashboardRoutes;
