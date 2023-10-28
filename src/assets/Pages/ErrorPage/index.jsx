import Button from "..//../Components/Button";
import Navigation from "../../Components/Navigation";
import styles from "./style.module.css";

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className={styles.errorContainer}>
          <div className={styles.errorLeft}>
            <h1 className={styles.errorTitle}>404</h1>
            <p className={styles.errorDescription}>
              We are sorry, but the page you requested was not found
            </p>
            <Button title={"Back to Home"} bg={"dark"} />
          </div>
          <div className="errorRight">
            <img className={styles.errorPhoto} src="./errorPage.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
