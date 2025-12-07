(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/Desktop/proyectos/cursos/web-cursos/data-base/courses.js [client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$data$2d$base$2f$courses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/cursos/web-cursos/data-base/courses.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const mockUseRouter = ()=>{
    const getQueryParams = ()=>{
        const params = {};
        if ("TURBOPACK compile-time truthy", 1) {
            const searchParams = new URLSearchParams(window.location.search);
            // Usamos un mock por defecto (si no hay parámetros en la URL)
            if (!searchParams.has('id') && !searchParams.has('video')) {
                return {
                    id: '1',
                    video: '101'
                };
            }
            for (const [key, value] of searchParams.entries()){
                params[key] = value;
            }
        }
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
const useRouterReal = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"].name !== 'mockUseRouter' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"] : mockUseRouter;
const WatchCourse = ()=>{
    _s();
    // Inicialización del router y extracción de parámetros
    const router = useRouterReal();
    const { id: courseId, video: videoId } = router.query;
    // Estados para almacenar los datos del curso y video
    const [course, setCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoItem, setVideoItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WatchCourse.useEffect": ()=>{
            // Ejecutar la lógica de búsqueda solo cuando el router esté listo y los IDs existan
            if (router.isReady && courseId && videoId) {
                // 1. Buscar el curso por ID
                const foundCourse = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$data$2d$base$2f$courses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["courses"].find({
                    "WatchCourse.useEffect.foundCourse": (c)=>c.id.toString() === courseId
                }["WatchCourse.useEffect.foundCourse"]);
                setCourse(foundCourse);
                if (foundCourse) {
                    // 2. Buscar el video dentro del temario (syllabus)
                    const foundVideo = foundCourse.syllabus.find({
                        "WatchCourse.useEffect.foundVideo": (v)=>v.id.toString() === videoId
                    }["WatchCourse.useEffect.foundVideo"]);
                    setVideoItem(foundVideo);
                }
                setLoading(false);
            } else if (router.isReady) {
                // Si el router está listo pero faltan IDs, terminamos la carga
                setLoading(false);
            }
        }
    }["WatchCourse.useEffect"], [
        courseId,
        videoId,
        router.isReady
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-48 bg-gray-50 p-8 rounded-xl shadow-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center bg-red-100 rounded-xl max-w-lg mx-auto mt-10 shadow-lg border border-red-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-red-800 mb-2",
                    children: "Error 404 - Contenido No Encontrado"
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 80,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mt-2",
                    children: "No pudimos encontrar el curso o la lección solicitada."
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wrapper whatch-course",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "whatch-course-son",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "whatch-course-title",
                    children: videoItem.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js",
                    lineNumber: 112,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whatch-course-iframe",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$cursos$2f$web$2d$cursos$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
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
_s(WatchCourse, "hsPBpLMOLBcmXyuV/mYvc1YmdXU=", false, function() {
    return [
        useRouterReal
    ];
});
_c = WatchCourse;
const __TURBOPACK__default__export__ = WatchCourse;
var _c;
__turbopack_context__.k.register(_c, "WatchCourse");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/cursos/whatch-course";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/Desktop/proyectos/cursos/web-cursos/pages/cursos/whatch-course.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__c02358ce._.js.map