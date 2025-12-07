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
    }
];
}),
"[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$data$2d$base$2f$courses$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/data-base/courses.js [ssr] (ecmascript)");
;
;
;
;
;
const SeeCourse = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    const [course, setCourse] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (id) {
            const foundCourse = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$data$2d$base$2f$courses$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["courses"].find((c)=>c.id.toString() === id);
            setCourse(foundCourse);
            setLoading(false);
        }
    }, [
        id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "loading-container wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "loading-spinner"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: "Cargando curso..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                    lineNumber: 24,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
            lineNumber: 22,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!course) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "error-container wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    children: "Curso no encontrado"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                    lineNumber: 32,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: "El curso que buscas no existe o ha sido removido."
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                    lineNumber: 33,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "back-button",
                    onClick: ()=>router.push('/cursos'),
                    children: "Volver a los cursos"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                    lineNumber: 34,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
            lineNumber: 31,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "see-course-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
            className: "container-see-course wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container-info-see-course",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "title-see-course",
                                    children: course.nameCourse
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "instructor-see-course",
                                    children: [
                                        "Instructor: ",
                                        course.instructor
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "description-see-course",
                                    children: [
                                        "Descripcion : ",
                                        course.description
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "duration-see-course",
                                    children: [
                                        "Duracion : ",
                                        course.duration
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "price-see-course",
                                    children: [
                                        "Precio : ",
                                        course.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "technologies-see-course"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                            lineNumber: 50,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            src: course.image,
                            alt: course.nameCourse,
                            className: "image-see-course"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                            lineNumber: 58,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                    lineNumber: 48,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "subtitle-see-course",
                    children: [
                        "Clases del curso (",
                        course.syllabus.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                    lineNumber: 63,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                    className: "list-see-course",
                    children: course.syllabus.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "list-item-see-course",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: item.videoUrl,
                                    rel: "noopener noreferrer",
                                    className: "hover:underline"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "list-link-see-course",
                                    href: {
                                        pathname: '/cursos/whatch-course',
                                        query: {
                                            id: course.id,
                                            video: item.id
                                        }
                                    },
                                    children: [
                                        item.title,
                                        " ",
                                        ` | duracion   ${item.duration}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
                    lineNumber: 65,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
            lineNumber: 46,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/see-course.js",
        lineNumber: 45,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0b694cb5._.js.map