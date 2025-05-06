import styles from '../styles/Header.module.css'
import { MdQuiz } from "react-icons/md";

function Header(){

    return(
        <div>
            <h1 className={styles.text}>Quiz <MdQuiz /></h1>
        </div>
    );

}
export default Header;