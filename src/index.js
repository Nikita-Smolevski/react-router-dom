import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from "./App";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NewsPage from "./pages/NewsPage";
import MapPage from "./pages/MapPage";
import WantedPage from "./pages/WantedPage";
import WikiPage from "./pages/WikiPage";
import MessengerPage from "./pages/MessengerPage";
import FriendsPage from "./pages/FriendsPage";
import GroupsPage from "./pages/GroupsPage";
import HelpPage from "./pages/HelpPage";
import StorePage from "./pages/StorePage";
import SheltersPage from "./pages/SheltersPage";
import VolunteersPage from "./pages/VolunteersPage";
import ServicesPage from "./pages/ServicesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path:"/login",
        element:<LoginPage/>
    },
    {
        path:"/profile",
        element:<ProfilePage/>
    },
    {
        path:"/news",
        element:<NewsPage/>
    },
    {
        path:"/map",
        element:<MapPage/>
    },
    {
        path:"/wanted",
        element:<WantedPage/>
    },
    {
        path:"/wiki",
        element:<WikiPage/>
    },
    {
        path:"/messenger",
        element:<MessengerPage/>
    },
    {
        path:"/friends",
        element:<FriendsPage/>
    },
    {
        path:"/groups",
        element:<GroupsPage/>
    },
    {
        path:"/help",
        element:<HelpPage/>
    },
    {
        path:"/store",
        element:<StorePage/>
    },
    {
        path:"/shelters",
        element:<SheltersPage/>
    },
    {
        path:"/volunteers",
        element:<VolunteersPage/>
    },
    {
        path:"/services",
        element:<ServicesPage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


