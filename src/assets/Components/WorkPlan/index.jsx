import axios from "axios";
import { useEffect, useState } from "react";
const WorkPlan = () => {
  const url = "http://localhost:3000/WorkPlan";
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setCards(data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {cards.map(({ id, title, decription }) => {
            return (
              <div className="col-4" key={id}>
                <h3>{title}</h3>
                <p>{decription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkPlan;
