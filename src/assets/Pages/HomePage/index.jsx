import AboutUs from "../../Components/AboutUs";
import Banner from "../../Components/Banner";
import Brands from "../../Components/Brands";
import Navigation from "../../Components/Navigation";
import Stylish from "../../Components/Stylish";
import WorkPlans from "../../Components/WorkPlans";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FollowProject from "../../Components/FollowProject";
import Experience from "../../Components/Experience";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Helmet>
        <title>Interno</title>
      </Helmet>
      <Navigation />
      <Banner />
      <WorkPlans />
      <Stylish />
      <AboutUs />
      <Brands />
      <FollowProject />
      <Experience />
    </motion.div>
  );
};

export default HomePage;
