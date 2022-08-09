import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useNavigate();

  function onAddMeetupButtonClickHandler(userEnteredMeetupData) {
    fetch(
      "https://meetups-app-8c4ad-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(userEnteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetupButtonClick={onAddMeetupButtonClickHandler} />
    </section>
  );
}

export default NewMeetupPage;
