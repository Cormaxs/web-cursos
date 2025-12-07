module.exports = [
"[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
// IMPORTACIÓN DE MOCK DE DATOS
// Reemplaza esto con tu ruta real: import { courses } from '../../data-base/courses';
const courses = [
    {
        id: 1,
        nameCourse: "Domina los Agentes de IA en 30 días",
        instructor: "Juanito el huerfanito",
        description: "Aprende a construir agentes de IA avanzados.",
        duration: "10 horas",
        price: "Gratis",
        syllabus: [
            // Nota: Se asume que tu base de datos usa 'videoUrl' como el ID de YouTube
            {
                id: 101,
                title: "Introducción a los agentes de IA",
                videoUrl: "vB-W17jT08k"
            },
            {
                id: 102,
                title: "Configuración del entorno y primeros pasos",
                videoUrl: "y-jU-4lR7gM"
            }
        ]
    },
    {
        id: 2,
        nameCourse: "Estructuras de Datos Avanzadas",
        instructor: "Prof. Algoritmo",
        description: "Un curso profundo sobre árboles, grafos y tablas hash.",
        duration: "15 horas",
        price: "$50",
        syllabus: [
            {
                id: 201,
                title: "Introducción a Árboles AVL",
                videoUrl: "Qp4u8_iWpQo"
            },
            {
                id: 202,
                title: "Recorridos en Grafos (DFS/BFS)",
                videoUrl: "c_l42t2qJ20"
            }
        ]
    }
];
// =================================================================
// MOCK useRouter: Implementación de simulación para entornos sin Next.js
// Se define para evitar el error de compilación "Could not resolve next/router"
// =================================================================
const mockUseRouter = ()=>{
    // Función para obtener los parámetros de la URL
    const getQueryParams = ()=>{
        const params = {};
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return params;
    };
    // Simulación de navegación (para los botones de regreso)
    const push = (url)=>{
        console.log(`[Simulación de Navegación] Intentando navegar a: ${url}`);
    };
    return {
        query: getQueryParams(),
        isReady: true,
        push
    };
};
// En un entorno Next.js real, usarías: import { useRouter } from 'next/router';
// Aquí, la definimos como el mock para que compile.
const useRouter = mockUseRouter;
const WatchCourse = ()=>{
    // 1. Inicialización y extracción de parámetros del router
    const router = useRouter();
    const { id: courseId, video: videoId } = router.query;
    // 2. Estados
    const [course, setCourse] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [videoItem, setVideoItem] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Ejecutar la lógica de búsqueda solo cuando el router esté listo y los IDs existan
        if (router.isReady && courseId && videoId) {
            // 1. Buscar el curso por ID (asegurando la comparación de tipos)
            const foundCourse = courses.find((c)=>c.id.toString() === courseId);
            setCourse(foundCourse);
            if (foundCourse) {
                // 2. Buscar el video dentro del temario (syllabus)
                const foundVideo = foundCourse.syllabus.find((v)=>v.id.toString() === videoId);
                setVideoItem(foundVideo);
            }
            setLoading(false);
        } else if (router.isReady) {
            // Si el router está listo pero faltan IDs (o son inválidos), terminamos la carga
            setLoading(false);
        }
    // Nota: router.query está implícitamente incluida en courseId y videoId.
    }, [
        courseId,
        videoId,
        router.isReady
    ]);
    // --- 3. Renderizado de Carga ---
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-48 bg-gray-50 p-8 rounded-xl shadow-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-xl font-medium text-indigo-600",
                children: "Cargando el contenido del curso..."
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                lineNumber: 106,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
            lineNumber: 105,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    // --- 4. Manejo de Errores (404) ---
    if (!course || !videoItem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "p-8 text-center bg-red-100 rounded-xl max-w-lg mx-auto mt-10 shadow-lg border border-red-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-red-800 mb-2",
                    children: "Error 404 - Contenido No Encontrado"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 115,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mt-2",
                    children: "No pudimos encontrar el curso o la lección solicitada."
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 116,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md",
                    // Usa router.push (simulado aquí)
                    onClick: ()=>router.push('/cursos'),
                    children: "Volver al Inicio"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 119,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
            lineNumber: 114,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    // --- 5. Renderizado Principal ---
    // Usamos el campo 'videoUrl' de tu objeto de temario.
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoItem.videoUrl}?autoplay=1&rel=0`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-8 bg-gray-100 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "text-indigo-600 hover:text-indigo-800 transition block mb-4 font-medium flex items-center",
                    onClick: ()=>router.push(`/cursos/see-course?id=${course.id}`),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 mr-2",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                                lineNumber: 143,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                            lineNumber: 142,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Volver al temario de: ",
                        course.nameCourse
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 138,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2",
                    children: videoItem.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 148,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 mb-6",
                    children: [
                        "Módulo: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-indigo-700",
                            children: course.nameCourse
                        }, void 0, false, {
                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                            lineNumber: 152,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 151,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative pt-[56.25%] mb-8 bg-gray-800 rounded-xl shadow-2xl overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("iframe", {
                        className: "absolute top-0 left-0 w-full h-full",
                        src: youtubeEmbedUrl,
                        title: `Reproduciendo: ${videoItem.title}`,
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                        lineNumber: 157,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 156,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-800 mb-3",
                            children: "Información de la lección"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                            lineNumber: 170,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                            className: "space-y-1 text-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Instructor:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                                            lineNumber: 172,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        course.instructor
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                                    lineNumber: 172,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Descripción del Curso:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        course.description
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "ID de Lección:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                                            lineNumber: 174,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        videoId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                            lineNumber: 171,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 169,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
            lineNumber: 136,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
        lineNumber: 135,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WatchCourse;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__307cc12a._.js.map