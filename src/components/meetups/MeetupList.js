import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((element) => (
        <MeetupItem
          key={element.id}
          id={element.id}
          image={element.image}
          title={element.title}
          address={element.address}
          description={element.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
