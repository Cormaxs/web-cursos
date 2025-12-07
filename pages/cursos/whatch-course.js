import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { courses } from '../../data-base/courses';

const mockUseRouter = () => {
    const getQueryParams = () => {
        const params = {};
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search);
            
            // Usamos un mock por defecto (si no hay parámetros en la URL)
            if (!searchParams.has('id') && !searchParams.has('video')) {
                return { id: '1', video: '101' }; 
            }
            for (const [key, value] of searchParams.entries()) {
                params[key] = value;
            }
        }
        return params;
    };

    // Simulación de navegación (necesario para el botón de regreso)
    const push = (url) => { 
        console.log(`[Simulación de Navegación] Intentando navegar a: ${url}`);
    };

    return {
        query: getQueryParams(),
        isReady: true,
        push,
    };
};

// Se utiliza el mock si no se puede resolver 'next/router'
const useRouterReal = typeof useRouter !== 'undefined' && useRouter.name !== 'mockUseRouter' ? useRouter : mockUseRouter;


const WatchCourse = () => {
    // Inicialización del router y extracción de parámetros
    const router = useRouterReal(); 
    const { id: courseId, video: videoId } = router.query; 
    
    // Estados para almacenar los datos del curso y video
    const [course, setCourse] = useState(null);
    const [videoItem, setVideoItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ejecutar la lógica de búsqueda solo cuando el router esté listo y los IDs existan
        if (router.isReady && courseId && videoId) {
            // 1. Buscar el curso por ID
            const foundCourse = courses.find(c => c.id.toString() === courseId);
            setCourse(foundCourse);

            if (foundCourse) {
                // 2. Buscar el video dentro del temario (syllabus)
                const foundVideo = foundCourse.syllabus.find(v => v.id.toString() === videoId);
                setVideoItem(foundVideo);
            }
            setLoading(false);
        } else if (router.isReady) {
            // Si el router está listo pero faltan IDs, terminamos la carga
            setLoading(false);
        }
    }, [courseId, videoId, router.isReady]);


    if (loading) {
        return (
            <div className="flex items-center justify-center h-48 bg-gray-50 p-8 rounded-xl shadow-inner">
                <p className="text-xl font-medium text-indigo-600">Cargando el contenido del curso...</p>
            </div>
        );
    }

    // --- Manejo de Errores ---
    if (!course || !videoItem) {
        return (
            <div className="p-8 text-center bg-red-100 rounded-xl max-w-lg mx-auto mt-10 shadow-lg border border-red-300">
                <h1 className="text-2xl font-bold text-red-800 mb-2">Error 404 - Contenido No Encontrado</h1>
                <p className="text-gray-600 mt-2">
                    No pudimos encontrar el curso o la lección solicitada.
                </p>
                <button 
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md"
                    onClick={() => router.push('/cursos')}
                >
                    Volver al Inicio
                </button>
            </div>
        );
    }
    
    // Construcción de la URL de YouTube con el ID del video encontrado
    console.log("Video URL from syllabus:", videoItem.videoUrl);
    const UrlEmbed = `https://www.youtube.com/embed/${videoItem.videoUrl}`
    return (
        <div className="wrapper whatch-course">
            <div className="whatch-course-son">
                {/* Enlace de regreso con simulación de push */}
                <a 
                    href={`/cursos/see-course?id=${course.id}`} 
                    className="whatch-course-back"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push(`/cursos/see-course?id=${course.id}`);
                    }}
                >
                    &larr; Regresar al curso
                </a>

                <h1 className="whatch-course-title">
                    {videoItem.title}
                </h1>
                

                {/* Contenedor del Iframe Responsive (16:9 aspect ratio) */}
                <div className="whatch-course-iframe">
                    <iframe
                        className="iframe"
                        src={UrlEmbed}
                        title={`Reproduciendo: ${videoItem.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture; "
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                
            </div>
        </div>
    );
};

export default WatchCourse;