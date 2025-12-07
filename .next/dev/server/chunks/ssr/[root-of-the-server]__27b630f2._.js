module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/Desktop/proyectos/cursos/web-cursos/data-base/courses.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>courses
]);
const courses = [
    //cursos de verdad
    {
        id: 1,
        nameCourse: "Node JS desde 0",
        instructor: "midudev",
        description: "Aprende todo lo que necesitas saber sobre Node.js. En esta Capítulo 1, conocerás realmente lo que es, cómo funciona, haremos ejercicios interactivos, veremos su sistema de módulos desde cero y muchas cosas más.",
        duration: "09:00",
        price: "gratis",
        image: "https://i.ytimg.com/vi/yB4n_K7dZV8/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBbNQuli5K1FdkF7oWrN7ImPBsRlw",
        technologies: [
            "nodejs",
            "programacion",
            "express",
            "Web",
            "javascript"
        ],
        rating: 4.5,
        students: "indefinido",
        syllabus: [
            {
                id: 1,
                title: " Introducción y primeros pasos",
                description: "",
                duration: "2:18:30",
                videoUrl: "yB4n_K7dZV8"
            },
            {
                id: 3,
                title: "SOLUCIÓN de CORS y Desarrollo de API REST con Express",
                description: "",
                duration: "1:32:00",
                videoUrl: "9d3KhCqOtU"
            },
            {
                id: 2,
                title: "Desarrollando una API con Express desde cero",
                description: "",
                duration: "1:24:52",
                videoUrl: "YmZE1HXjpd4"
            },
            {
                id: 4,
                title: "EL PODER de la ARQUITECTURA MVC + Despliegue de API REST",
                description: "",
                duration: "1.21:34",
                videoUrl: "ev3Yxva4wI4"
            },
            {
                id: 5,
                title: "Crea un Base de Datos MySQL y evita los hackers (buenas prácticas)",
                description: "",
                duration: "1:24:17",
                videoUrl: "eCWNQfzuuso"
            },
            {
                id: 6,
                title: "Chat en TIEMPO REAL con Node.js, Socket.io, SQL, HTML y CSS",
                description: "",
                duration: "1:30:11",
                videoUrl: "WpbBhTx5R9Q"
            },
            {
                id: 7,
                title: " Aprende Autenticación de Usuario, Sesión, Cookies y JWT con Node.js",
                description: "",
                duration: "1:40:58",
                videoUrl: "UqnnhAZxRac"
            }
        ]
    },
    {
        id: 2,
        nameCourse: "Curso COMPLETO de HTML GRATIS desde cero: SEO, semántica y más",
        instructor: "Midudev",
        description: "¡Sumérgete en el emocionante mundo de la creación web! Aprende HTML desde cero en este curso completo y totalmente gratuito. ¡Prepárate para construir sitios web asombrosos y dar rienda suelta a tu creatividad en línea! No te lo pierdas.",
        duration: "1:54:00",
        price: "gratis",
        image: "",
        technologies: [],
        rating: null,
        students: "",
        syllabus: [
            {
                id: 1,
                title: "HTML5 desde CERO - Introducción y primeros pasos",
                description: "",
                duration: "1:54:00",
                videoUrl: "3nYLTiY5skU"
            }
        ]
    },
    {
        id: 3,
        nameCourse: "De Novato a Ninja: Aprende TypeScript - curso intensivo (#1)",
        instructor: "midudev",
        description: "En este video, estaremos hablando sobre TypeScript para principiantes un pequeño curso intensivo. Esta es una guía completa y detallada para aprender TypeScript desde cero. Comenzando desde el principio, cubriremos los conceptos básicos de TypeScript, como qué es, cómo funciona y para qué se puede utilizar. Luego, pasaremos a aprender la sintaxis de TypeScript, que es esencial para cualquier desarrollador de TypeScript. A continuación, veremos ejercicios de TypeScript y elementos a tener en cuenta. Concluiremos analizando Arrays matrices y tuplas de TypeScript y uso común.",
        duration: "1:42:00",
        price: "gratis",
        image: "",
        technologies: [],
        rating: null,
        students: "",
        syllabus: [
            {
                id: 1,
                title: "Curso intensivo de tytpescript desde cero",
                description: "",
                duration: "1:42:00",
                videoUrl: "fUgxxhI_bvc"
            }
        ]
    },
    {
        id: 4,
        nameCourse: "Curso de GIT y GITHUB DESDE CERO Para Aportar a Proyectos",
        instructor: "midudev",
        description: "",
        duration: "1:39:29",
        price: "gratis",
        image: "",
        technologies: [],
        rating: null,
        students: "",
        syllabus: [
            {
                id: 1,
                title: "GIT y GITHUB desde CERO",
                description: "",
                duration: "1:39:29",
                videoUrl: "niPExbK8lSw"
            }
        ]
    },
    {
        id: 5,
        nameCourse: "Curso Tailwind CSS 4 desde cero",
        instructor: "midudev",
        description: "",
        duration: "1:38:00",
        price: "gratis",
        image: "",
        technologies: [],
        rating: null,
        students: "",
        syllabus: [
            {
                id: 1,
                title: "Taildwind css 4 desde 0",
                description: "",
                duration: "1:38:00",
                videoUrl: "R5EXap3vNDA"
            }
        ]
    },
    {
        id: 6,
        nameCourse: "Curso COMPLETO de Python DESDE CERO para Principiantes 2025",
        instructor: "midudev",
        description: "",
        duration: "8:32:00",
        price: "gratis",
        image: "",
        technologies: [],
        rating: null,
        students: "",
        syllabus: [
            {
                id: 1,
                title: "Python desde CERO - Curso COMPLETO para Principiantes",
                description: "",
                duration: "8:32:00",
                videoUrl: "TkN2i-_4N4g"
            }
        ]
    }
];
}),
"[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$data$2d$base$2f$courses$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/data-base/courses.js [ssr] (ecmascript)");
;
;
;
;
const mockUseRouter = ()=>{
    const getQueryParams = ()=>{
        const params = {};
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return params;
    };
    // Simulación de navegación (necesario para el botón de regreso)
    const push = (url)=>{
        console.log(`[Simulación de Navegación] Intentando navegar a: ${url}`);
    };
    return {
        query: getQueryParams(),
        isReady: true,
        push
    };
};
// Se utiliza el mock si no se puede resolver 'next/router'
const useRouterReal = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"].name !== 'mockUseRouter' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"] : mockUseRouter;
const WatchCourse = ()=>{
    // Inicialización del router y extracción de parámetros
    const router = useRouterReal();
    const { id: courseId, video: videoId } = router.query;
    // Estados para almacenar los datos del curso y video
    const [course, setCourse] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [videoItem, setVideoItem] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Ejecutar la lógica de búsqueda solo cuando el router esté listo y los IDs existan
        if (router.isReady && courseId && videoId) {
            // 1. Buscar el curso por ID
            const foundCourse = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$data$2d$base$2f$courses$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["courses"].find((c)=>c.id.toString() === courseId);
            setCourse(foundCourse);
            if (foundCourse) {
                // 2. Buscar el video dentro del temario (syllabus)
                const foundVideo = foundCourse.syllabus.find((v)=>v.id.toString() === videoId);
                setVideoItem(foundVideo);
            }
            setLoading(false);
        } else if (router.isReady) {
            // Si el router está listo pero faltan IDs, terminamos la carga
            setLoading(false);
        }
    }, [
        courseId,
        videoId,
        router.isReady
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-48 bg-gray-50 p-8 rounded-xl shadow-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-xl font-medium text-indigo-600",
                children: "Cargando el contenido del curso..."
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                lineNumber: 71,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
            lineNumber: 70,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    // --- Manejo de Errores ---
    if (!course || !videoItem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "p-8 text-center bg-red-100 rounded-xl max-w-lg mx-auto mt-10 shadow-lg border border-red-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-red-800 mb-2",
                    children: "Error 404 - Contenido No Encontrado"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 80,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mt-2",
                    children: "No pudimos encontrar el curso o la lección solicitada."
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md",
                    onClick: ()=>router.push('/cursos'),
                    children: "Volver al Inicio"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 84,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
            lineNumber: 79,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Construcción de la URL de YouTube con el ID del video encontrado
    console.log("Video URL from syllabus:", videoItem.videoUrl);
    const UrlEmbed = `https://www.youtube.com/embed/${videoItem.videoUrl}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "wrapper whatch-course",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "whatch-course-son",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    href: `/cursos/see-course?id=${course.id}`,
                    className: "whatch-course-back",
                    onClick: (e)=>{
                        e.preventDefault();
                        router.push(`/cursos/see-course?id=${course.id}`);
                    },
                    children: "← Regresar al curso"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 101,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "whatch-course-title",
                    children: videoItem.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 112,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "whatch-course-iframe",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("iframe", {
                        className: "iframe",
                        src: UrlEmbed,
                        title: `Reproduciendo: ${videoItem.title}`,
                        frameBorder: "0",
                        allow: "accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture; ",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                        lineNumber: 119,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 118,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
            lineNumber: 99,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
        lineNumber: 98,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__27b630f2._.js.map