import type { NextPage } from 'next'
import { FaUserCircle } from 'react-icons/fa';
import {
  useState,
} from 'react';
import { useRouter } from 'next/router'

// Custom Imports
import { InputField, LoadingSpinner } from '../components';
import styles from "../styles/Login.module.scss";


const Login: NextPage = () => {
  const router = useRouter()
  const [user, setUser] = useState({ login: false, error: '' })

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setUser({ ...user, login: true });
    if (user.login) {
      router.push('/dashboard')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          {/* <h2></h2> */}
          <FaUserCircle />
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className={styles.cardBody}>
            <InputField className={styles.formInput} type="text" placeholder="Username" name='' value='' />
            <InputField className={styles.formInput} type="password" placeholder="Password" name='' value='' />
            <p>Forgotten Password ?</p>
          </div>
          <div className={styles.cardFooter}>
            <button className={styles.button} type="submit">
              {/* <LoadingSpinner width={50} height={50}/> */}
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
