import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";

function EventsPage() {
  // const data = useLoaderData();
  // if (data.isError) return <p>{data.message}</p>;
  // const events = data.events;
  // return <EventsList events={events} />;

  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {eventsData => <EventsList events={eventsData} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Error loading events" };
    // throw new Error({ message: "Error loading events" });
    // throw new Response(JSON.stringify({ message: "Error loading events" }), {
    //   status: 500,
    // });
    throw json({ message: "Error loading events" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
