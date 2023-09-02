import React, { useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import CardProps from '../../common/interfaces/card-props';

export const ClassCard = (props: CardProps) => {
  const {
    title,
    grade,
    // salary,
    // address,
    // subject,
    // submittedDate,
    // registeredTutors,
  } = props;
  return (
    <div className={classnames(styles.classCardWrapper)}>
      <div className={classnames(styles.cardTitle)}>{title}</div>
      <div className={classnames(styles.cardBody)}>
        <div className={classnames(styles.cardDetail)}>{'lớp ' + grade}</div>
        <div className={classnames(styles.listTutors)}></div>
        <div className={classnames(styles.regisBtn)}></div>
      </div>
      <div className={classnames(styles.cardFooter)}></div>
    </div>
  );
};
