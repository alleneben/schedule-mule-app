import styles from "./card.module.scss";

const Cards = ({ children }) => {


    return <div className={styles.cards}>
        { children }
    </div>
}

export default Cards;