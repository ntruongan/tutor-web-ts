import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

export const NavBar = () => {
  return (
    <>
      <div className='navbarWrapper'>
        <div className='navbarItems'>
          <div className={classnames(styles.navbarItem)}>Home</div>
          <div className={classnames(styles.navbarItem)}>About</div>
          <div className={classnames(styles.navbarItem)}>Services</div>
          <div className={classnames(styles.navbarItem)}>Contact</div>
        </div>
        <div className="div-7">
          <div className="div-8">Login</div>
          <div className="div-9">SignUp</div>
        </div>
      </div>

    </>
  )
}
