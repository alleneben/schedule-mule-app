import styles from  "./LoadingSpinner.module.scss";


type LoadingSpinnerProps = {
    width: number
    height: number
}
const LoadingSpinner = (props: LoadingSpinnerProps) => {

    return <div className={styles.loader} style={{ ...props }}></div>

}


export default LoadingSpinner