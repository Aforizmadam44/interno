
import { NavLink } from 'react-router-dom'
import { MyRoutes } from '../MyRoutes'
import styles from './style.module.css'
import "..//..//..//index.css"
const Navigation = () => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.navbar}>
        <div className="logo">
            <img src="./Logo.svg" alt="Logo" />
        </div>
        <nav>
           {
            MyRoutes.map(({id, path, title})=>{
                return(
                    title &&(<NavLink className={({isActive})=>isActive? styles.active : styles.navlink }  key={id} to={path}>{title}</NavLink>)
                    )
            })
           }
         
        </nav>
        </div>
        </div>

    </header>
  )
}

export default Navigation