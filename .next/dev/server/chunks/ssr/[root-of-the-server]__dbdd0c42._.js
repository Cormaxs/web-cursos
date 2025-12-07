module.exports = [
"[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
// Base de Datos de Cursos: Se incluye directamente aquí para evitar el error de importación.
const courses = [
    {
        id: 1,
        nameCourse: "Domina los Agentes de IA en 30 días",
        instructor: "Juanito el huerfanito",
        description: "Aprende a construir agentes de IA avanzados utilizando las últimas herramientas y SDKs del mercado. Este curso te guiará a través de 8 proyectos prácticos.",
        duration: "10 horas",
        price: "Gratis",
        image: "https://placehold.co/400x200/4F46E5/ffffff?text=Agentes+IA",
        technologies: [
            "IA",
            "OpenAI"
        ],
        rating: 4.3,
        students: 1200,
        syllabus: [
            {
                id: 101,
                title: "Introducción a los agentes de IA",
                videoUrl: "https://www.youtube.com/watch?v=iDHzQO2r3xo"
            },
            {
                id: 102,
                title: "Configuración del entorno y primeros pasos",
                videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ]
    },
    {
        id: 2,
        nameCourse: "Estructuras de Datos Avanzadas",
        instructor: "Prof. Algoritmo",
        description: "Un curso profundo sobre la implementación y complejidad de árboles, grafos y tablas hash.",
        duration: "15 horas",
        price: "$50",
        image: "https://placehold.co/400x200/EC4899/ffffff?text=Estructuras+Datos",
        technologies: [
            "Algoritmos",
            "C++"
        ],
        rating: 4.8,
        students: 500,
        syllabus: [
            {
                id: 201,
                title: "Introducción a Árboles AVL",
                videoUrl: "https://www.youtube.com/watch?v=tree1"
            },
            {
                id: 202,
                title: "Recorridos en Grafos (DFS/BFS)",
                videoUrl: "https://www.youtube.com/watch?v=graph2"
            }
        ]
    }
];
// Usamos un ID de curso fijo por defecto (1) para la demostración, ya que 'next/router' no está disponible.
const MOCK_COURSE_ID = 1;
const SeeCourse = ()=>{
    // Definimos el estado del ID del curso. Lo iniciamos con el ID fijo para la demo.
    const [courseId, setCourseId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(MOCK_COURSE_ID.toString());
    const [course, setCourse] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    // Función de navegación simulada, ya que Next.js Link/Router no funciona aquí.
    const navigateToWatch = (cId, sId, title)=>{
        // En un entorno real de Next.js, usarías router.push(`/watch/${cId}/${sId}`);
        // Aquí usamos un mensaje para demostrar que se capturan ambos IDs correctamente.
        window.alert(`Simulación de navegación a la lección:\nCurso ID: ${cId}\nSección ID: ${sId}\nTítulo: ${title}`);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (courseId) {
            // Buscamos el curso por su ID (como string)
            const foundCourse = courses.find((c)=>c.id.toString() === courseId);
            setCourse(foundCourse);
            setLoading(false);
        }
    }, [
        courseId
    ]);
    // Función para cambiar el curso en la demostración
    const handleCourseChange = (e)=>{
        setLoading(true);
        setCourseId(e.target.value);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "ml-4 text-gray-700",
                    children: "Cargando curso..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                    lineNumber: 82,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
            lineNumber: 80,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!course) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-screen p-8 text-center bg-red-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-red-700 mb-4",
                    children: "Curso no encontrado"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                    lineNumber: 90,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6",
                    children: "El curso que buscas no existe o ha sido removido."
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                    lineNumber: 91,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-150",
                    onClick: ()=>window.alert('Simulando navegación a la lista de cursos'),
                    children: "Volver a los cursos"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
            lineNumber: 89,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        htmlFor: "course-select",
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Seleccionar Curso (Demo ID):"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                        lineNumber: 106,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                        id: "course-select",
                        value: courseId,
                        onChange: handleCourseChange,
                        className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm",
                        children: courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                value: c.id,
                                children: [
                                    c.id,
                                    ": ",
                                    c.nameCourse
                                ]
                            }, c.id, true, {
                                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                lineNumber: 116,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                        lineNumber: 109,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                className: "max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-indigo-700 mb-2",
                        children: course.nameCourse
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                        lineNumber: 123,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600 mb-6",
                        children: [
                            "Instructor: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: course.instructor
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                lineNumber: 124,
                                columnNumber: 71
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                        lineNumber: 124,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: course.image,
                        alt: course.nameCourse,
                        className: "w-full h-48 object-cover rounded-lg mb-6 shadow-md",
                        onError: (e)=>{
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/800x200/4F46E5/ffffff?text=Imagen+No+Disponible";
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                        lineNumber: 126,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Descripción:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                lineNumber: 133,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            course.description
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                        lineNumber: 133,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center text-gray-500 mb-8 p-3 border-y",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    "Duración: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-700",
                                        children: course.duration
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                        lineNumber: 135,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                lineNumber: 135,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    "Precio: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-green-600",
                                        children: course.price
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                        lineNumber: 136,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                lineNumber: 136,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                        lineNumber: 134,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "technologies-see-course",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3",
                                children: "Temario del curso:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                lineNumber: 141,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: course.syllabus.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "bg-indigo-50 hover:bg-indigo-100 p-3 rounded-lg transition duration-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>navigateToWatch(course.id, item.id, item.title),
                                            className: "block text-indigo-700 font-semibold hover:text-indigo-900 text-left w-full",
                                            children: [
                                                item.title,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 ml-3",
                                                    children: " (Simular Lección)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                                    lineNumber: 157,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                            lineNumber: 152,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.id || index, false, {
                                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                                lineNumber: 143,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                        lineNumber: 140,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
                lineNumber: 122,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/all-courses.js",
        lineNumber: 103,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SeeCourse;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dbdd0c42._.js.map