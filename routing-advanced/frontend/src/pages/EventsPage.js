import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) return <p>{data.message}</p>;

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Error loading events" };
    throw new Error({ message: "Error loading events" });
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
};
