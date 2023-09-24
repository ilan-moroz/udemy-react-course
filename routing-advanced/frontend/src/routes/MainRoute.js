import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import EventDetailPage from "../pages/EventDetailPage";
import NewEventPage from "../pages/NewEventPage";
import EditEventPage from "../pages/EditEventPage";
import Page404 from "../pages/Page404";

const MainRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "events", element: <EventsPage /> },
        { path: "events/:eventId", element: <EventDetailPage /> },
        { path: "events/new", element: <NewEventPage /> },
        { path: "events/:eventId/edit", element: <EditEventPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;
