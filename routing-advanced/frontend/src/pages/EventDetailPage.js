// import { useParams } from "react-router-dom";
import {
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
  // const params = useParams();
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {loadEvent => <EventItem event={loadEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {loadEvents => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async id => {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Error loading details for selected event" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Error loading events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = async ({ request, params }) => {
  return defer({
    event: await loadEvent(params.eventId),
    events: loadEvents(),
  });
};

export const action = async ({ request, params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json({ message: "could not delete event" }, { status: 500 });
  }

  return redirect("/events");
};
