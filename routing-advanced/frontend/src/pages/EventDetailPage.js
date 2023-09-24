import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Products details</h1>
      {params.eventId}
    </>
  );
};

export default EventDetailPage;
