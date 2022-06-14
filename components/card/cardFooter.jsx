import styles from "./card.module.scss";

const CardFooter = ({ children }) => {

    return <div className={styles.cardFooter}>
        { children }
    </div>
}

export default CardFooter;