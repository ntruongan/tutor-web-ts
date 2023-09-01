import React from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { ClassCard } from './components/class-card/class-card';
import AcademicLevels from './common/enums/academic-levels';
import { ClassList } from './components/class-list/class-list';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <ClassList
        classList={[
          { title: '123', grade: 12 },
          { title: '124', grade: 12 },
        ]}
      />
    </>
  );
}

export default App;
