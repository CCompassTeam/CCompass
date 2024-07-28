// src/app/context/CourseContext.tsx

'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface CourseContextType {
  selectedCourse: any;
  setSelectedCourse: (course: any) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const value = useMemo(() => ({ selectedCourse, setSelectedCourse }), [selectedCourse]);

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
};
