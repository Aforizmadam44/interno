import Navigation from "../../Components/Navigation";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Navigation />
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;
