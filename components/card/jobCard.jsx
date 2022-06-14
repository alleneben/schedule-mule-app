import styles from "./card.module.scss";
import Image from 'next/image'

const JobCard = ({ Img }) => {

    return <div className={styles.jobCard}>
        <div className={styles.jobTime}><h1>9:00am</h1> <span>Scheduled</span></div>
        <div className={styles.jobDetail}>
            <div className={styles.jobTitle}>Flat Rate Clean - 180/QA</div>
            <div className={styles.jobAddress}>
                <p>Jennifer Pratt, 90 East Accra, Pothole Drive</p>
            </div>
        </div>
        <Image src={Img} alt="Avatar" width={50} height={50} />
    </div>
}

export default JobCard;