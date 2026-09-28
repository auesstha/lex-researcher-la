globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_BKqYvUrJ.mjs";
import { t as createComponent } from "./compiler_BzXqPCge.mjs";
import { t as $$Base } from "./Base_Gr6BRx0i.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$404 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$404;
	Astro.response.status = 404;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center"><div class="serif text-7xl sm:text-8xl font-bold text-stone-200 mb-6">404</div><h1 class="serif text-2xl font-bold text-slate-900 mb-3">Page Not Found</h1><p class="text-stone-500 mb-8 text-sm sm:text-base">The article or page you're looking for doesn't exist or has been moved.</p><a href="/" class="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3.5 rounded-xl hover:bg-slate-800 active:bg-slate-700 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>Return Home</a></div>` })}`;
}, "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/404.astro", void 0);
var $$file = "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
