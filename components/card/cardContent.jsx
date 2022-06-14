
import styles from "./card.module.scss";

const CardContent = ({ children }) => {
    return <div>
        <div className={styles.cardContent}>
            { children }
        </div>
    </div>
}

export default CardContent;