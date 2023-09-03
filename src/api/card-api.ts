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
        tags: ['Toán', 'Lớp 5'],
      },
      {
        title: 'Lớp 12: Môn Sinh',
        grade: 12,
        subject: 'sinh',
        address: 'Tân Thành, Tân Phú, HCM',
        salary: 1500000,
        submitDate: '12/12/2012',
        tags: ['Sinh', 'Lớp 12'],
      },
      {
        title: 'Lớp 12: Môn Sinh',
        grade: 12,
        subject: 'sinh',
        address: 'Tân Thành, Tân Phú, HCM',
        salary: 1500000,
        submitDate: '12/12/2012',
        tags: ['Sinh', 'Lớp 12'],
      },
      {
        title: 'Lớp 12: Môn Sinh',
        grade: 12,
        subject: 'sinh',
        address: 'Tân Thành, Tân Phú, HCM',
        salary: 1500000,
        submitDate: '12/12/2012',
        tags: ['Sinh', 'Lớp 12'],
      },
      {
        title: 'Lớp 12: Môn Sinh',
        grade: 12,
        subject: 'sinh',
        address: 'Tân Thành, Tân Phú, HCM',
        salary: 1500000,
        submitDate: '12/12/2012',
        tags: ['Sinh', 'Lớp 12'],
      },
    ];
  } catch (error) {
    console.error(error); // No type assertion needed
  }
};
