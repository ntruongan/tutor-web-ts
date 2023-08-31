import TutorProps from './tutor-props';

interface CardProps {
  grade: number;
  subject: string;
  address: string;
  salary: number;
  sessionPerWeek: number;
  timePerSession: number;
  daysInWeek: number[];
  requirement: string;
  contact: number;
  submittedDate: string;
  academicLevels: AcademicLevels;
  registedTutors: TutorProps[];
}

export default CardProps;
