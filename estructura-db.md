# Estructura de JSON

La base de datos es un JSON donde se almacenan los enlaces de todos los cursos con sus respectivos datos.


```JSON
 {
        id: null, // Tipo: Number. Identificador único del curso
        nameCourse: "", // Tipo: String. Nombre completo del curso (importante para SEO)
        instructor: "", // Tipo: String. Nombre del instructor o institución
        description: "", // Tipo: String. Descripción larga y detallada del curso (clave para SEO)
        duration: "", // Tipo: String. Duración total estimada (e.g., "10 horas", "9:00")
        price: "", // Tipo: String. Costo (e.g., "gratis", "$49.99")
        image: "", // Tipo: String. URL de la imagen de portada o thumbnail (e.g., miniatura de YouTube)
        technologies: [], // Tipo: Array<String>. Palabras clave o tecnologías cubiertas (e.g., ["nodejs", "programacion", "javascript"])
        rating: null, // Tipo: Number. Puntuación promedio (e.g., 4.5)
        students: "", // Tipo: String. Número de estudiantes inscritos (e.g., "indefinido", "12,500")
        syllabus: [
            // El formato de cada lección/capítulo dentro del curso
            {
                id: null, // Tipo: Number. Identificador único de la lección
                title: "", // Tipo: String. Título de la lección
                description: "", // Tipo: String. Descripción detallada de la lección (opcional)
                duration: "", // Tipo: String. Duración de la lección (e.g., "2:18:30")
                videoUrl: "" // Tipo: String. ID del video (e.g., ID de YouTube para incrustar) -> https://www.youtube.com/watch?v=3nYLTiY5skU solo la parte despues de "v" -> 3nYLTiY5skU
            },
        ]
    },
    // Puedes añadir más objetos de cursos aquí si lo necesitas
];```


## limpio

```JSON
{
        id: null, 
        nameCourse: "", 
        instructor: "",
        description: "", 
        duration: "",
        price: "", 
        image: "", 
        technologies: [], 
        rating: null, 
        students: "",
        syllabus: [
            {
                id: null,
                title: "", 
                description: "",
                duration: "", 
                videoUrl: "" 
            },
        ]
    },
   
];```