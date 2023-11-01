import { Link } from "react-router-dom";
import styles from "./style.module.css";
const PageCover = ({ src, page }) => {
  return (
    <div className={styles.bannerContainer}>
      <img src={src} className={styles.bannerImage} alt="" />
      <div className={styles.bannerDesign}>
        <h2 className={styles.title}>¿What we do?</h2>
        <h3>
          <Link to={"/"} className={styles.activeLink}>
            {" "}
            Home
          </Link>
          / {page}
        </h3>
      </div>
    </div>
  );
};

export default PageCover;
