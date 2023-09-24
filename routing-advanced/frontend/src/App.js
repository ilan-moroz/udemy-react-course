// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <div>
      <MainRoute />
    </div>
  );
}

export default App;
