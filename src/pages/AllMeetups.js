import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  // const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://meetups-app-8c4ad-default-rtdb.firebaseio.com/meetups.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const helperArray = [];

  //       for (const key in data) {
  //         const element = {
  //           id: key,
  //           ...data[key],
  //         };

  //         helperArray.push(element);
  //       }

  //       setIsLoading(false);
  //       setLoadedMeetups(helperArray);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  return (
    <section>
      <h1>All Meetups page</h1>
      {/* <MeetupList meetups={loadedMeetups} /> */}
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
