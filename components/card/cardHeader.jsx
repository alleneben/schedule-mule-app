import styles from "./card.module.scss";

const CardHeader = (props) => {


    return <div className={`${styles.cardHead}`}>
            { props.children }
    </div>
}

export default CardHeader;