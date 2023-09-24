import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages/HomePage";
import EventsPage, { loader as eventLoader } from "../pages/EventsPage";
import EventDetailPage, {
  loader as EventDetailLoader,
} from "../pages/EventDetailPage";
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
            {
              index: true,
              element: <EventsPage />,
              loader: eventLoader,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: EventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },
            { path: "new", element: <NewEventPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;
