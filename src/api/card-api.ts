import AcademicLevels from '../common/enums/academic-levels';
import CardProps from '../common/interfaces/card-props';
import { ClassCard } from './../components/class-card/class-card';

export const getClassList = async (): Promise<any> => {
  try {
    // const response = await fetch('your_api_endpoint_url');
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // const data = await response.json();
    // return data as CardProps;
    return [
      {
        title: 'Lớp 5: Môn Toán',
        grade: 5,
        subject: 'toán',
        address: 'Thủ Đức, HCM',
        salary: 1400000,
        submitDate: '12/12/2012',
        sessionPerWeek: 3,
        timePerSession: 60,
        daysInWeek: [2, 3, 5, 1],
        academicLevel: AcademicLevels.College,
        registeredTutors: [
          {
            name: 'Nguyễn Trường An',
            gender: 'Nam',
            academicLevel: AcademicLevels.College,
            phoneNumber: '0987654321',
            email: 'abc@gmail.com',
            avatar: 'http://12',
          },
          {
            name: 'Nguyễn Văn B',
            gender: 'Nam',
            academicLevel: AcademicLevels.High,
            phoneNumber: '0987654321',
            email: 'abc@gmail.com',
            avatar: 'http://12',
          },
        ],
        tags: ['Toán', 'Lớp 5'],
      },
      {
        title: 'Lớp 8: Môn Hóa',
        grade: 8,
        subject: 'toán',
        address: 'Thủ Đức, HCM',
        salary: 1400000,
        submitDate: '12/12/2012',
        tags: ['Toán', 'Lớp 5'],
        sessionPerWeek: 3,
        timePerSession: 60,
        daysInWeek: [2, 3, 5],
        academicLevel: AcademicLevels.College,
        registeredTutors: [
          {
            name: 'Lee Trường An',
            gender: 'Nam',
            academicLevel: AcademicLevels.College,
            phoneNumber: '0987654321',
            email: 'abxac@gmail.com',
            avatar: 'http://12',
          },
          {
            name: 'Nguyễn Văn B',
            gender: 'Nam',
            academicLevel: AcademicLevels.High,
            phoneNumber: '0987654321',
            email: 'abc@gmail.com',
            avatar: 'http://12',
          },
        ],
      },
      {
        title: 'Lớp 12: Môn Sinh',
        grade: 12,
        subject: 'sinh',
        address: 'Tân Thành, Tân Phú, HCM',
        salary: 1500000,
        submitDate: '12/12/2012',
        tags: ['Sinh', 'Lớp 12'],
        sessionPerWeek: 3,
        timePerSession: 60,
        daysInWeek: [2, 3, 5],
        academicLevel: AcademicLevels.College,
        registeredTutors: [
          {
            name: 'Nguyễn NGUYEN An',
            gender: 'Nam',
            academicLevel: AcademicLevels.College,
            phoneNumber: '0987654321',
            email: 'abc@gmail.com',
            avatar: 'http://12',
          },
          {
            name: 'Nguyễn Truong B',
            gender: 'Nam',
            academicLevel: AcademicLevels.High,
            phoneNumber: '0987654321',
            email: 'abc@gmail.com',
            avatar: 'http://12',
          },
        ],
      },
      {
        title: 'Lớp 12: Môn Sinh',
        grade: 12,
        subject: 'sinh',
        address: 'Tân Thành, Tân Phú, HCM',
        salary: 1500000,
        submitDate: '12/12/2012',
        tags: ['Sinh', 'Lớp 12'],
        sessionPerWeek: 4,
        timePerSession: 90,
        daysInWeek: [2, 4, 5],
        academicLevel: AcademicLevels.College,
        registeredTutors: [
          {
            name: 'Nguyễn NGUYEN An',
            gender: 'Nam',
            academicLevel: AcademicLevels.College,
            phoneNumber: '0987654321',
            email: 'abc@gmail.com',
            avatar: 'http://12',
          },
          {
            name: 'Nguyễn Truong B',
            gender: 'Nam',
            academicLevel: AcademicLevels.High,
            phoneNumber: '0987654321',
            email: 'abc@gmail.com',
            avatar: 'http://12',
          },
        ],
      },
      {
        title: 'Lớp 12: Môn Sinh',
        grade: 12,
        subject: 'sinh',
        address: 'Tân Thành, Tân Phú, HCM',
        salary: 1500000,
        submitDate: '12/12/2012',
        tags: ['Sinh', 'Lớp 12'],
        sessionPerWeek: 2,
        timePerSession: 60,
        daysInWeek: [2, 3, 5],
        academicLevel: AcademicLevels.College,
        registeredTutors: [],
      },
      {
        title: 'Lớp 12: Môn Sinh',
        grade: 12,
        subject: 'sinh',
        address: 'Tân Thành, Tân Phú, HCM',
        salary: 1500000,
        submitDate: '12/12/2012',
        tags: ['Sinh', 'Lớp 12'],
        sessionPerWeek: 2,
        timePerSession: 90,
        daysInWeek: [2, 3, 5],
        academicLevel: AcademicLevels.College,
        registeredTutors: [],
      },
    ];
  } catch (error) {
    console.error(error); // No type assertion needed
  }
};
