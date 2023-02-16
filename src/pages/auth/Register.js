import React from 'react'
import styles from './auth.module.scss';
import signup_img from '../../assets/signup.jpg';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card.js';

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
      <img src={signup_img} alt='signup' width='500'/>
    </div> 
    <Card>
      <div className={styles.form}>
        <h2>Sign up</h2>
        <form>
            <input type='text' placeholder='Email' required/>
            <input type='password' placeholder='Password' required/>
            <input type='password' placeholder='Confirm Password' required/>
            <button className='--btn --btn-primary --btn-block'>Sign up</button>
        </form>
        <span className={styles.register}>
          <p>Already have an account?</p>
          <Link to='/login'>Login</Link>
        </span>
    </div>
    </Card>
    
  </section>
  )
}

export default Register