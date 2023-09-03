import CardProps from '../../common/interfaces/card-props';
import { ClassCard } from '../class-card/class-card';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { getClassList } from '../../api/card-api';

interface ClassListProps {
  classList: CardProps[];
}

export const ClassList = () => {
  const [cards, setCardProps] = useState<CardProps[]>();

  useEffect(() => {
    getClassList()
      .then((data) => {
        setCardProps(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(cards);

  return (
    <div className={classnames(styles.cardGrid)}>
      {cards &&
        cards.map((card, index) => (
          <ClassCard
            key={index}
            {...card}
          />
        ))}
    </div>
  );
};
