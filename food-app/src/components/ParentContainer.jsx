import styles from "./parentcontainer.module.css";

export default function ParentContainer({children}) {
  return <div className={styles.parentContainer}>{children}</div>;
}