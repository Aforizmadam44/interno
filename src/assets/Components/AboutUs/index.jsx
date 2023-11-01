import { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
const _url = "http://localhost:3000/AboutCards";

const AboutUs = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(_url)
      .then((response) => {
        if (response.data) {
          setCards(response.data);
          console.log(response.data);
        } else {
          console.error("Data not found in the response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>What People Think About Us</h2>
      <div className="container">
        <div className={`row ${styles.cards}`}>
          {cards.map(({ src, name, location, id, decription }) => (
            <div className={`col - 4 mt-5 mx-auto ${styles.card}`} key={id}>
              <div className={styles.imgAndInfo}>
                <img src={src} alt="" className={styles.img} />
                <div className={styles.nameAndCountry}>
                  <h3 className={styles.name}>{name}</h3>
                  <h3 className={styles.location}>{location}</h3>
                </div>
              </div>
              <p>{decription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
