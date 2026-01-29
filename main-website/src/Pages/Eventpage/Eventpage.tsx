import { EventCards } from "../../Components/EventCard/EventCards";
import { pastEvents } from "../../Content/pastEvents";
import { upcomingEvents } from "../../Content/upcomingEvents";

export const Eventpage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full">
        <div className="flex justify-center items-center flex-col w-full">
            <h2 className="w-[70vw] text-white text-center mt-10 mb-5 text-3xl font-semibold">Upcoming Events</h2>
            {EventCards(upcomingEvents)}
        </div>
        <div className="flex justify-center items-center flex-col w-full">
            <h2 className="w-[70vw] text-white text-center mt-10 mb-5 text-3xl font-semibold">Past Events</h2>
            {EventCards(pastEvents)}
        </div>
    </div>
  );
}



