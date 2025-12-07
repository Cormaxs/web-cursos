import React from 'react';
import Head from 'next/head'; 

const home = () => {
   
    const pageTitle = "Cursos Gratuitos: Rutas de Aprendizaje en IA, Web y Datos";
    const pageDescription = "Descubre las rutas de aprendizaje más completas y gratuitas en Inteligencia Artificial, Desarrollo Web Full Stack y Análisis de Datos. Conviértete en el profesional que el mercado laboral exige con nuestros cursos de alta calidad.";

    return (
        <>
    
            <Head>
               
                <title>{pageTitle}</title> 
                
        
                <meta name="description" content={pageDescription} />
                
             
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
             
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                
            </Head>

            <div className='wrapper container mx-auto p-4 max-w-4xl'>
             
                <h1 className='text-4xl font-extrabold text-blue-700 mt-8 mb-4'>
                    Cursos gratuitos para tu carrera profesional
                </h1>
                
                <article className='prose lg:prose-xl'>
                 
                    <p className='text-lg text-gray-700 mb-6'>
                        Descubre las rutas de aprendizaje más completas en <strong className='font-semibold'>Inteligencia Artificial</strong>, <strong className='font-semibold'>Desarrollo Web Full Stack</strong> y <strong className='font-semibold'>Análisis de Datos</strong>. Conviértete en el profesional que el mercado laboral exige. Todos nuestros cursos son de acceso libre.
                    </p>
                    
                  
                    <h2 className='text-3xl font-bold text-gray-800 border-b pb-2 mt-8 mb-4'>Nuestras Rutas de Aprendizaje Principales</h2>
                    
                 
                    <ul className='list-disc list-inside space-y-2 text-gray-700'>
                        <li><a href="/rutas/ia" className='text-blue-600 hover:text-blue-800 font-medium'>Inteligencia Artificial y Machine Learning</a></li>
                        <li><a href="/rutas/web" className='text-blue-600 hover:text-blue-800 font-medium'>Desarrollo Web Full Stack Moderno (JavaScript, Node.js, React)</a></li>
                        <li><a href="/rutas/datos" className='text-blue-600 hover:text-blue-800 font-medium'>Análisis y Visualización de Datos</a></li>
                     
                        <li>Asistente remoto (Habilidades para el trabajo a distancia)</li>
                        <li>Inglés A1 - C2 para Profesionales de Tecnología</li>
                        <li>Excel avanzado para la gestión de proyectos</li>
                    </ul>
                </article>
            </div>
        </>
    );
};

export default home;