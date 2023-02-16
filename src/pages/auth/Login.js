import React from 'react'
import styles from './auth.module.scss';
import login_img from '../../assets/login.jpg';
import { Link } from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa';
import Card from '../../components/card/Card.js';

const Login = () => {
  return (
  <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
      <img src={login_img} alt='login' width='500'/>
    </div>
    <Card>
      <div className={styles.form}>
        <h2>Login</h2>
        <form>
            <input type='text' placeholder='Email' required/>
            <input type='password' placeholder='Password' required/>
            <button className='--btn --btn-primary --btn-block'>Login</button>
            <div className={styles.links}>
                <Link to='/reset'>Reset Password</Link>
            </div>
            <p>-- or --</p>
        </form>
        <button className='--btn --btn-danger --btn-block' ><FaGoogle color='#fff'/> &nbsp; Login with Google</button>
        <span className={styles.register}>
          <p>Don't have an account?</p>
          <Link to='/register'>Register</Link>
        </span>
    </div>
    </Card>
    
  </section>
  )
}

export default Login