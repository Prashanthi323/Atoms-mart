import {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import {FaShoppingCart, FaTimes, FaUserCircle, FaHeart} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import websiteLogo from '../../assets/websiteLogo.png';

const logo= (
  <div className={styles.logo}>
        <Link to='/'>
        <img src={websiteLogo} alt='logo' width='100'/>
        </Link>
      </div>
)

const Header = () => {
  //state variable to show menubar in mobile view
  const [showMenu, setShowMenu] = useState(false);

  // display or hide menubar on click
  const toggleMenu=()=>{
    setShowMenu(!showMenu)
  };

  //hide menu bar on click
  const hideMenu=()=>{
    setShowMenu(false)
  }
  return (
    <header>

    <div className={styles.header}>
      {logo}
      <nav className={ showMenu? `${styles['show-nav']}`: `${styles['hide-nav']}`}>

        {/* wrapper to give black background */}
        <div className={
          showMenu
          ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` 
          : `${styles['nav-wrapper']}`
        }
        onClick={hideMenu}
        ></div>

          <ul onClick={hideMenu}>
            <li className={styles['logo-mobile']}>
              {logo}
              <FaTimes size={22} color='white' onClick={hideMenu}/>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
          </ul>
          <div className={styles['header-right']} onClick={hideMenu}>
            <span className={styles.links}>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
              <Link to='/order-history'>My Orders</Link>
              <Link to='/wishlist'><FaHeart size={20}/></Link>
              <Link to='/cart'><FaShoppingCart size={20}/></Link>
              <Link to='/user-account'><FaUserCircle size={20}/></Link>
              
            </span>          
          </div>
      </nav>

      <div className={styles['menu-icon']}>        
        <GiHamburgerMenu size={28} onClick={toggleMenu}/>
      </div>
    </div>
    </header>
  )
}

export default Header