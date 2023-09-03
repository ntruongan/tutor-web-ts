import React from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { ClassCard } from './components/class-card/class-card';
import AcademicLevels from './common/enums/academic-levels';
import { ClassList } from './components/class-list/class-list';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <div className='content'>
        <ClassList />
      </div>
    </div>
  );
}

export default App;
