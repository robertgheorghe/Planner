import PlannerTable from "../Table/plannerTable";
import RightSection from "../RightSection/rightSection";
import classes from "./Content.module.css";
const Content = () => {
  return (
    <div className={classes.content}>
      <PlannerTable />
      <RightSection />
    </div>
  );
};

export default Content;
