import { useState } from "react";
import styles from "./style.module.css";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const url = "http://localhost:3000/FollowProject";
const FollowProject = () => {
  const [follow, setFollow] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        if (data) {
          setFollow(data);
        } else {
          console.error("Data not found in the response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className={styles.project}>
        <h3 className={styles.title}>Follow Our Projects </h3>
        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
        <div className={styles.photoContainer}>
          {follow.map(({ id, src, title, category }) => (
            <div key={id}>
              <div className="imgAndCategory">
                <img className={styles.img} src={src} alt="" />
                <div className={styles.imgContainer}>
                  <div className={styles.imgTitleCategory}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <h4 className={styles.category}>{category}</h4>
                  </div>

                  <NavLink>
                    <img src="./_.png" alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FollowProject;
