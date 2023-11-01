import { Link, NavLink } from "react-router-dom";
import { MyRoutes } from "../MyRoutes";
import styles from "./style.module.css";
import "..//..//App.css";
const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navbar}>
          <Link to={"/"} className="logo">
            <img src="../Logo.svg" alt="Logo" />
          </Link>
          <nav>
            {MyRoutes.map(({ id, path, title }) => {
              return (
                title && (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.navlink
                    }
                    key={id}
                    to={path}
                  >
                    {title}
                  </NavLink>
                )
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
