import React, { useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import CardProps from '../../common/interfaces/card-props';

export const ClassCard = (props: CardProps) => {
  const { title, grade, salary, address, subject, submitDate, tags } = props;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const tutors = [{ name: 'Tutor 1' }, { name: 'Tutor 2' }];
  const numberOfTutors = tutors.length;
  return (
    <div className={classnames(styles.classCardWrapper)}>
      <div className={classnames(styles.cardTitle)}>{title}</div>
      <div className={classnames(styles.cardBody)}>
        <div className={classnames(styles.cardDetail)}>
          <p>
            <b>Lớp</b>: {grade}
          </p>
          <p>
            <b>Lương</b>: {salary} đồng/tháng
          </p>
          <p>
            <b>Địa chỉ</b>: {address}
          </p>
          <p>
            <b>Môn học</b>: {subject}
          </p>
        </div>
        <div
          className={classnames(styles.listTutors)}
          onClick={togglePopup}>
          Danh sách đã đăng ký: {numberOfTutors} gia sư
        </div>
        {isPopupOpen && <div>hahahaha</div>}
        <div className={classnames(styles.regisBtn)}>
          <p>ĐĂNG KÝ NHẬN LỚP</p>
        </div>
      </div>
      <div className={classnames(styles.cardFooter)}>
        <div className={classnames(styles.submitDate)}>
          <p>Ngày đăng: {submitDate}</p>
        </div>
        <div className={classnames(styles.tags)}>
          {tags.map((tag, index) => (
            <div className={classnames(styles.tag)}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
