import EventList from "../../components/event-list";
import { getFeaturedEvents } from "../../dummy-data";

export default function Home() {
  const featuredEvents=getFeaturedEvents();
  return (
   
  <main>
  <EventList items={featuredEvents}></EventList>
  </main>
  )
}
