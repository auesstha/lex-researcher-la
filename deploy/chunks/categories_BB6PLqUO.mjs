globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BKqYvUrJ.mjs";
import { t as createComponent } from "./compiler_BzXqPCge.mjs";
import { c as getBadgeClass, d as getStripClass, n as CATEGORY_GROUPS, t as CATEGORIES, u as getPublishedArticles } from "./articles_BDfAGTqd.mjs";
import { t as $$Base } from "./Base_Gr6BRx0i.mjs";
//#region src/pages/categories.astro
var categories_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Categories,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Categories = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Categories;
	const articles = await getPublishedArticles(Astro.locals);
	const countByCategory = {};
	for (const a of articles) countByCategory[a.category] = (countByCategory[a.category] || 0) + 1;
	const groups = Object.entries(CATEGORY_GROUPS).map(([groupKey, group]) => ({
		...group,
		key: groupKey,
		categories: Object.entries(CATEGORIES).filter(([, cat]) => cat.group === groupKey).map(([slug, cat]) => ({
			slug,
			...cat,
			count: countByCategory[slug] || 0
		}))
	}));
	const totalArticles = articles.length;
	const totalCategories = Object.keys(CATEGORIES).length;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "All Law Categories",
		"description": "Browse all 15 law categories at Lex Researcher — from international human rights law to air and space law."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="bg-slate-900 text-white"><div class="h-0.5 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent"></div><div class="max-w-5xl mx-auto px-5 py-12 md:py-16"><p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Lex Researcher</p><h1 class="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">All Law Categories</h1><p class="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">Explore ${totalArticles} peer-reviewed research articles across ${totalCategories} areas of law — from international human rights and humanitarian law to maritime, refugee, trade, and environmental law.</p><!-- quick stats --><div class="flex flex-wrap gap-4"><div class="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center"><div class="text-xl font-bold text-white">${totalCategories}</div><div class="text-xs text-slate-500 uppercase tracking-wide">Categories</div></div><div class="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center"><div class="text-xl font-bold text-white">${totalArticles}</div><div class="text-xs text-slate-500 uppercase tracking-wide">Articles</div></div><div class="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center"><div class="text-xl font-bold text-white">3</div><div class="text-xs text-slate-500 uppercase tracking-wide">Groups</div></div></div></div></section><div class="max-w-5xl mx-auto px-5 py-10 md:py-14 space-y-14">${groups.map((group) => renderTemplate`<section><!-- Group heading --><div class="flex items-center gap-4 mb-6"><div><h2 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">${group.label}</h2><p class="text-xs text-stone-400 mt-0.5">${group.categories.length} categories</p></div><span class="flex-1 h-px bg-stone-200 hidden sm:block"></span></div><!-- Grid of category cards --><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${group.categories.map((cat) => renderTemplate`<a${addAttribute(`/category/${cat.slug}`, "href")} class="group bg-white border border-stone-200 hover:border-stone-300 hover:shadow-md active:scale-[.99] rounded-2xl overflow-hidden transition-all flex flex-col"><!-- colour strip --><div${addAttribute(`h-1 w-full ${getStripClass(cat.color)}`, "class")}></div><div class="p-5 flex flex-col flex-1"><!-- icon + label --><div class="flex items-start justify-between mb-3"><div class="text-3xl">${cat.icon}</div><span${addAttribute(`text-xs font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wide ${getBadgeClass(cat.color)}`, "class")}>${cat.count > 0 ? `${cat.count} article${cat.count !== 1 ? "s" : ""}` : "Coming soon"}</span></div><h3 class="font-serif font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-amber-800 transition-colors">${cat.label}</h3><p class="text-stone-500 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3 mb-4">${cat.description}</p><div class="flex items-center justify-end pt-3 border-t border-stone-100"><span class="text-xs font-semibold text-slate-600 group-hover:text-amber-700 transition-colors flex items-center gap-1">${cat.count > 0 ? "Browse Articles" : "View Category"}<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg></span></div></div></a>`)}</div></section>`)}</div>` })}`;
}, "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/categories.astro", void 0);
var $$file = "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/categories.astro";
var $$url = "/categories";
//#endregion
//#region \0virtual:astro:page:src/pages/categories@_@astro
var page = () => categories_exports;
//#endregion
export { page };
