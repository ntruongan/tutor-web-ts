import React, { useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export const ClassCard = () => {
  return (
    <div className={classnames(styles.classCardWrapper)}>
      <div className={classnames(styles.cardTitle)}></div>
      <div className={classnames(styles.cardBody)}>
        <div className={classnames(styles.cardDetail)}></div>
        <div className={classnames(styles.listTutors)}></div>
        <div className={classnames(styles.regisBtn)}></div>
      </div>
      <div className={classnames(styles.cardFooter)}></div>
    </div>
  );
};
