import AcademicLevels from '../enums/academic-levels';
import TutorProps from './tutor-props';

interface CardProps {
  title: string;
  grade: number;
  subject: string;
  address: string;
  salary: number;
  // sessionPerWeek: number;
  // timePerSession: number;
  // daysInWeek: number[];
  // requirement: string;
  // contact: number;
  submitDate: string;
  tags: string[];
  // academicLevels: AcademicLevels;
  // registeredTutors: TutorProps[];
}

export default CardProps;
