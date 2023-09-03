import React, { useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import CardProps from '../../common/interfaces/card-props';
import AdditionalComponent from '../class-registration/class-registration';

export const ClassCard = (props: CardProps) => {
  const {
    title,
    grade,
    salary,
    address,
    subject,
    submitDate,
    tags,
    sessionPerWeek,
    timePerSession,
    daysInWeek,
    academicLevel,
    registeredTutors,
  } = props;
  const [isPopupOpen, setIsPopupOpen] = useState(false); // tutors
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAdditionalComponent, setShowAdditionalComponent] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setShowAdditionalComponent(true);
  };
  // Function to toggle the flip state

  // new idea: create same flip component for another registered component. Hide ClassCard when flipped (180deg) then bring the component back after register compenent is hidden
  const toggleFlip = () => {
    console.log('flipping');
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      setShowAdditionalComponent(!showAdditionalComponent);
    }, 1000); // Delay matches the transition duration (1 second
  };
  const cardClasses = classnames(styles['card-flip'], {
    [styles['card-flip-flipped']]: isFlipped,
  });
  const numberOfTutors = registeredTutors.length;
  return (
    <div className='card-flip-container'>
      <div className={cardClasses}>
        <div className={classnames(styles.classCardWrapper)}>
          {!showAdditionalComponent && (
            <div className={classnames(styles.cardTitle)}>{title}</div>
          )}
          {!showAdditionalComponent && (
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
                <p>
                  <b>Số buổi</b>: {sessionPerWeek}
                </p>
                <p>
                  <b>Thời gian</b>: {timePerSession} phút
                </p>
                <p>
                  <b>Các buổi</b>:{' '}
                  {daysInWeek.map((d, index) => (
                    <>
                      {d === 1 ? 'Chủ nhật' : `Thứ ${d}`}
                      {index < daysInWeek.length - 1 && ','}{' '}
                    </>
                  ))}
                </p>
                <p>
                  <b>Học vấn</b>: {academicLevel}
                </p>
              </div>
              <div
                className={classnames(styles.listTutors)}
                onClick={togglePopup}>
                Danh sách đã đăng ký: {numberOfTutors} gia sư
              </div>
              {isPopupOpen && <div>hahahaha</div>}
              <div
                className={classnames(styles.regisBtn)}
                onClick={toggleFlip}>
                <p>ĐĂNG KÝ NHẬN LỚP</p>
              </div>
            </div>
          )}
          {!showAdditionalComponent && (
            <div className={classnames(styles.cardFooter)}>
              <div className={classnames(styles.submitDate)}>
                <p>Ngày đăng: {submitDate}</p>
              </div>
              <div className={classnames(styles.tags)}>
                {tags.map((tag) => (
                  <div className={classnames(styles.tag)}>{tag}</div>
                ))}
              </div>
            </div>
          )}
          {showAdditionalComponent && <AdditionalComponent />}
          {showAdditionalComponent && (
            <div
              className={classnames(styles.regisBtn)}
              onClick={toggleFlip}>
              <p>ĐĂNG KÝ NHẬN LỚP</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
