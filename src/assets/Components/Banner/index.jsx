import Button from "../Button";
import styles from "./style.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className="container">
        <h2>Let Your Home Be Unique</h2>
        <p>
          There are many variations of the passages of lorem Ipsum
          fromavailable,variations of the passages.
        </p>
        <Button title={"Send Now"} arrow bg={"gold"} />
      </div>
    </div>
  );
};

export default Banner;
