import CardProps from '../../common/interfaces/card-props';
import { ClassCard } from '../class-card/class-card';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface ClassListProps {
  classList: CardProps[];
}

export const ClassList = (cards: ClassListProps) => {
  return (
    <div className={classnames(styles.cardGrid)}>
      {cards.classList.map((card, index) => (
        <ClassCard
          key={index}
          {...card}
        />
      ))}
    </div>
  );
};
