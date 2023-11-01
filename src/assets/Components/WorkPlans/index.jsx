import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const WorkPlans = () => {
  const url = "http://localhost:3000/WorkPlan";
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setCards(data);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {cards.map(({ id, title, decription }) => {
            return (
              <div
                className="col-4 mt-5 py-5 d-flex flex-column align-items-center"
                key={id}
              >
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{decription}</p>
                <Link className={styles.link} to={`/wordplancarddetails/${id}`}>
                  Read more{" "}
                  <span>
                    {" "}
                    <AiOutlineArrowRight />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkPlans;
