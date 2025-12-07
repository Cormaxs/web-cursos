import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { courses } from '../../data-base/courses';

const SeeCourse = () => {
    const router = useRouter();
    const { id } = router.query;
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const foundCourse = courses.find(c => c.id.toString() === id);
            setCourse(foundCourse);
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="loading-container wrapper">
                <div className="loading-spinner"></div>
                <p>Cargando curso...</p>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="error-container wrapper">
                <h1>Curso no encontrado</h1>
                <p>El curso que buscas no existe o ha sido removido.</p>
                <button 
                    className="back-button"
                    onClick={() => router.push('/cursos')}
                >
                    Volver a los cursos
                </button>
            </div>
        );
    }

    return (
        <div className="see-course-wrapper">   
            <article className="container-see-course wrapper">
                
                <div className='container-info-see-course'>
               
                <div>
                <h1 className="title-see-course">{course.nameCourse}</h1>
                <p className="instructor-see-course">Instructor: {course.instructor}</p>
                <p className="description-see-course">Descripcion : {course.description}</p>
                <p className="duration-see-course">Duracion : {course.duration}</p>
                <p className="price-see-course">Precio : {course.price}</p>
                <div className="technologies-see-course"></div>
                </div>
                <img
                    src={course.image} 
                    alt={course.nameCourse} 
                    className="image-see-course"/>
                </div>
                    <h2 className="subtitle-see-course">Clases del curso ({course.syllabus.length})</h2>

                    <ul className="list-see-course">
          {course.syllabus.map((item, index) => (
            <li 
              key={index} 
              className="list-item-see-course"
            >
              {/* Mostramos el título y usamos el videoUrl como enlace */}
            <a 
                href={item.videoUrl} 
              
                rel="noopener noreferrer"
                className="hover:underline"
              >
               
              </a>

              <Link
              className='list-link-see-course'
              href={{
                pathname: '/cursos/whatch-course',
                query: { 
                    id: course.id,          
                    video: item.id          
                }
            }}>
             {item.title} {` | duracion   ${item.duration}`}
              </Link>
            </li>
          ))}
        </ul>
                   

                </article>
                </div>
                        
    );
};

export default SeeCourse;