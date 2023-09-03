import AcademicLevels from '../enums/academic-levels';
import TutorProps from './tutor-props';

interface CardProps {
  title: string;
  grade: number;
  subject: string;
  address: string;
  salary: number;
  sessionPerWeek: number;
  timePerSession: number;
  daysInWeek: number[];
  submitDate: string;
  tags: string[];
  academicLevel: AcademicLevels;
  registeredTutors: TutorProps[];
  requirement: string;
}

export default CardProps;
