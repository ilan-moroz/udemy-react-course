import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import EventDetailPage from "../pages/EventDetailPage";
import NewEventPage from "../pages/NewEventPage";
import EditEventPage from "../pages/EditEventPage";
import Page404 from "../pages/Page404";
import EventsRoot from "../pages/EventsRoot";

const MainRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            { index: true, element: <EventsPage /> },
            { path: ":eventId", element: <EventDetailPage /> },
            { path: "new", element: <NewEventPage /> },
            { path: ":eventId/edit", element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;
