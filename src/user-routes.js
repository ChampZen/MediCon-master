import Dashboard from "./views/Dashboard";
import UserProfile from "./views/UserProfile.jsx";
import TableList from "./views/TableList.jsx";
import Notifications from "./views/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/user"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/user"
  },
  {
    path: "/table",
    name: "Visit History",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/user"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/user"
  }
];

export default dashboardRoutes;
