// import { useParams } from "react-router-dom";
import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  // const params = useParams();
  const data = useLoaderData();

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    throw json(
      { message: "Error loading details for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
};
