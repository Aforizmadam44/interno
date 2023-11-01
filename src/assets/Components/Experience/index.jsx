import styles from "./style.module.css";
const Experience = () => {
  return (
    <div className={styles.container}>
      <div className="yearsAndSucess">
        <div className={styles.year}>12</div>
        <div className={styles.success}>Years Of Experience</div>
      </div>
      <div className="yearsAndSucess">
        <div className={styles.year}>85</div>
        <div className={styles.success}>Success Project</div>
      </div>
      <div className="yearsAndSucess">
        <div className={styles.year}>15</div>
        <div className={styles.success}>Active Project</div>
      </div>
      <div className="yearsAndSucess">
        <div className={styles.year}>95</div>
        <div className={styles.success}>Happy CUstomers</div>
      </div>
    </div>
  );
};

export default Experience;
