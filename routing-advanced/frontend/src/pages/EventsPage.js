import classes from "./EventsPage.module.css";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "System Of A Down",
    date: "28/5/2024",
    price: 299,
  },
  {
    id: "e2",
    title: "Denzel Curry",
    date: "28/10/2024",
    price: 199,
  },
  {
    id: "e3",
    title: "Swissa",
    date: "22/12/2023",
    price: 149,
  },
  {
    id: "e4",
    title: "Vibe Ish",
    date: "23/9/2023",
    price: 100,
  },
];

const EventsPage = () => {
  return (
    <>
      <ul className={classes.events}>
        {DUMMY_EVENTS.map(event => (
          <li key={event.id} className={classes.event}>
            <h2>{event.title}</h2>
            <h5>{event.date}</h5>
            <p>${event.price}</p>
            <Link to={event.id}>Event detail</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
