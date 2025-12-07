import React from 'react';
import Link from 'next/link';

import { courses } from '../../data-base/courses';

const CursosPage = () => {
  return (
    <div className='container-items-courses wrapper'>
      {courses.map((course) => (
        <div key={course.id} className='item-courses'>
          <Link 
            href={{
              pathname: '/cursos/see-course',
              query: { id: course.id }
            }} 
            className='link-item-courses'
          >
            <img 
              src={course.image} 
              alt={course.nameCourse}
              className='image-item-courses'
            />
            
            <div className='textos-item-courses'>
              <h3 className='titulo-item-courses'>{course.nameCourse}</h3>
              <p className='autor-item-courses'>{course.instructor}</p>
              
              <ol className='lista-item-courses'>
                {course.technologies.slice(0, 2).map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
                <li>{course.rating} ⭐</li>
                <li>{course.students} estudiantes</li>
              </ol>
              
              <p className='price-item-courses'>{course.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CursosPage;