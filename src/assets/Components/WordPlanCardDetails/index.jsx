import { useParams } from "react-router";
import Navigation from "../Navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import PageCover from "../PageCover";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
const url = "http://localhost:3000/WorkPlan/";
const WordDetails = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    axios.get(url + id).then(({ data }) => {
      setPlan(data);
      console.log(data);
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Helmet>
        <title>WorkPlan</title>
      </Helmet>
      <Navigation />
      <PageCover src="../PageCover1.jpg" page="Work Plan Banner" />
      <div className={styles.pageContainer}>
        <h2>{plan.title}</h2>
        <p className={styles.description}>
          {plan.decription} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Est deleniti, nam nobis a consequuntur culpa expedita incidunt
          esse, omnis exercitationem laudantium magnam aut vel eius facilis non
          magni dolorem! Temporibus, maiores? Quia odit eveniet mollitia minima
          facere dignissimos deserunt nesciunt id? Dicta aliquid soluta
          architecto id quia amet, quod inventore recusandae minus modi
          molestias numquam, accusantium quo mollitia culpa repudiandae quaerat
          tempora odio aut dignissimos illum? Minus laudantium sunt laborum
          delectus quo nisi placeat sequi dolorum repellat iusto fugiat,
          assumenda ut accusamus enim blanditiis? Tenetur, at excepturi fugiat
          ea aut pariatur aliquid voluptatum deserunt odit. Error similique
          laborum alias corrupti?
        </p>
      </div>
    </motion.div>
  );
};

export default WordDetails;
