import PlannerTable from "../Table/plannerTable";
import RightSection from "../RightSection/rightSection";
import classes from "./Content.module.css";
import AuthContext from "../../config/auth-context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const Content = () => {
  const authCtx = useContext(AuthContext);
  if (!authCtx.isLogged) {
    return <Navigate to="/login" replace />;
  } else {
  }
  return (
    <div className={classes.content}>
      <PlannerTable />
      <RightSection />
    </div>
  );
};

export default Content;
