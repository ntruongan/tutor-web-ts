import React from 'react'
import styles from './styles.module.scss'
import classnames from 'classnames'

export const NavBar = () => {
  return (
    <div className={classnames(styles.navbarWrapper)}>
      <div className={classnames(styles.navbarItems)}>
          <div className={classnames(styles.navbarItem, styles.dropdown)}>Danh sách lớp      
            <div className={classnames(styles.dropdownContent)}>
              <a href="#">Các lớp cấp 1</a>
              <a href="#">Các lớp cấp 2</a>
              <a href="#">Các lớp cấp 3</a>
              <a href="#">Các lớp ngoại ngữ</a>
            </div>
          </div>
          <div className={classnames(styles.navbarItem)}>Đăng ký gia sư</div>
          <div className={classnames(styles.navbarItem)}>Thông tin</div>
          <div className={classnames(styles.navbarItem)}>Liên hệ</div>
      </div>
      <div className={classnames(styles.accountInformation)}>
        <div className={classnames(styles.loginButton)}>Đăng nhập</div>
        <div className={classnames(styles.signUpButton)}>Đăng ký</div>
      </div>
    </div>
  )
}
