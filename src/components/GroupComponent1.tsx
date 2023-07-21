import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./GroupComponent1.module.css";

type GroupComponent1Type = {
  portfolioCompanies?: string;
  prop?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  portfolioCompanies,
  prop,
  propLeft,
}) => {
  const groupDiv1Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.groupChild} />
      <div className={styles.portfolioCompanies}>{portfolioCompanies}</div>
      <b className={styles.b}>{prop}</b>
    </div>
  );
};

export default GroupComponent1;
