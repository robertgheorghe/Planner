import classes from "./notes.module.css";

const Notes = () => {
  return (
    <div className={classes.notesWrapper}>
      <textarea placeholder="Notes" rows={8} />
    </div>
  );
};

export default Notes;
