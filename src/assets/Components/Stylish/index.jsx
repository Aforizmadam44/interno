import styles from "./style.module.css";
import Button from "../Button";

const Stylish = () => {
  return (
    <div>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-6">
            <h2 className={styles.title}>
              We Create The Art Of Stylish Living Stylishly
            </h2>
            <p className="mt-3">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div className={styles.callContainer}>
              <img src="./Call.png" alt="" />
              <div className="telephone">
                <a href="tel:+1 123456789" className={styles.number}>
                  +1 123456789
                </a>
                <p>Call Us Anytime</p>
              </div>
            </div>
            <Button
              bg={"dark"}
              title={"Get Free Estimate"}
              className={styles.button}
              arrow
            ></Button>
          </div>
          <div className="col-6 ">
            <img className={styles.img} src="./Stylish.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stylish;
// https://www.jobsearch.az/vacancies/libraff-kassir
