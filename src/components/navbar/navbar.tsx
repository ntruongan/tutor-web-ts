import React, { useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={classnames(styles.navbarWrapper)}>
      <div className={classnames(styles.navbarItems)}>
        <div className={classnames(styles.navbarItem, styles.dropdown)}>
          Danh sách lớp
          <div className={classnames(styles.dropdownContent)}>
            <a href='#'>Các lớp cấp 1</a>
            <a href='#'>Các lớp cấp 2</a>
            <a href='#'>Các lớp cấp 3</a>
            <a href='#'>Các lớp ngoại ngữ</a>
          </div>
        </div>
        <div className={classnames(styles.navbarItem, styles.hoverPointer)}>
          Đăng ký gia sư
        </div>
        <div className={classnames(styles.navbarItem, styles.hoverPointer)}>
          Thông tin
        </div>
        <div className={classnames(styles.navbarItem, styles.hoverPointer)}>
          Liên hệ
        </div>
      </div>
      {isLoggedIn ? (
        <div className={classnames(styles.accountInformation)}>
          <div className={classnames(styles.loginButton)}>
            Thông tin tài khoản
          </div>
          <div
            className={classnames(styles.logoutButton)}
            onClick={handleLogout}>
            Đăng xuất
          </div>
        </div>
      ) : (
        <div className={classnames(styles.accountInformation)}>
          <div
            className={classnames(styles.loginButton)}
            onClick={handleLogin}>
            Đăng nhập
          </div>
          <div className={classnames(styles.signUpButton)}>Đăng ký</div>
        </div>
      )}
    </div>
  );
};
